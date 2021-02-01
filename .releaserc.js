const dateFormat = require('dateformat');
const { readFileSync } = require('fs');
const { join } = require('path');

const TEMPLATE_DIR = './node_modules/semantic-release-gitmoji/lib/assets/templates';

const template = readFileSync(
  join(__dirname, TEMPLATE_DIR, 'default-template.hbs'),
).toString();
const commitTemplate = readFileSync(
  join(__dirname, TEMPLATE_DIR, 'commit-template.hbs'),
).toString();

module.exports = {
  plugins: [
    [
      'semantic-release-gitmoji', {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [
            ':bug:',
            ':ambulance:',
            ':lock:',
            ':zap:',
          ],
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime(format = 'UTC:yyyy-mm-dd') {
              return dateFormat(new Date(), format);
            },
          },
        },
      },
    ],
    '@semantic-release/github',
    // '@semantic-release/npm',
  ],
};
