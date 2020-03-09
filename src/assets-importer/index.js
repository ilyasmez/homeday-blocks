/* eslint-disable */

require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');
const CONFIG = require('./CONFIG');

if (process.env.FIGMA_ACCESS_TOKEN === undefined) {
  console.error('FIGMA_ACCESS_TOKEN is undefined. Did you add it to your environment variables?');
  return;
}

function fetchFromFigma(endpoint) {
  return fetch(`https://api.figma.com/v1${endpoint}`, {
    headers: {
      'x-FIGMA-token': process.env.FIGMA_ACCESS_TOKEN,
    },
  }).then(res => res.json());
}

function normalizeFilename({ name, regex }) {
  const matches = name.match(regex);

  return matches ? matches.pop() : null;
}

async function download({
  url,
  filename,
  dist = '',
}) {
  const distPath = `${process.cwd()}${dist}`;
  await fs.mkdir(distPath, { recursive: true }, (err) => {
    if (err) throw err;
  });
  const writer = fs.createWriteStream(`${distPath}/${filename}`);

  const response = await fetch(url);

  response.body.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function importAssetsFromFigma({
  fileKey,
  format,
  dist,
  filenameRegex,
}) {
  const file = await fetchFromFigma(`/files/${fileKey}/components`);
  const filenameMap = file.meta.components
    .reduce((map, component) => {
      const filename = normalizeFilename({ name: component.name, regex: filenameRegex });
      if (filename) {
        map[component.node_id] = filename;
      }

      return map;
    }, {});

  console.log('filenameMap', filenameMap);

  const ids = Object.keys(filenameMap).join(',');
  const assets = await fetchFromFigma(`/images/${fileKey}?ids=${ids}&format=${format}`);

  await Promise.all(
    Object.entries(assets.images)
      .map(([id, url]) => url && download({
        url,
        filename: `${filenameMap[id]}.${format}`,
        dist,
      })),
  );
}

CONFIG.FIGMA_FILES.forEach(FIGMA_FILE => importAssetsFromFigma({
  fileKey: FIGMA_FILE.KEY,
  format: FIGMA_FILE.FORMAT,
  filenameRegex: FIGMA_FILE.FILENAME_REGEX,
  dist: FIGMA_FILE.DIST,
}));
