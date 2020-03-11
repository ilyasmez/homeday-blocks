module.exports = {
  FIGMA_FILES: [
    {
      KEY: 'ZfLfSmSFdNbhNFvwitFIs6',
      SHOULD_MATCH_REGEX: new RegExp('Icons XL/ic_', 'i'),
      FILENAME_REGEX: new RegExp('ic_.*?(?=_)', 'i'),
      DIST: '/src/assets/big-icons',
      FORMAT: 'svg',
    },
    {
      KEY: 'ZfLfSmSFdNbhNFvwitFIs6',
      SHOULD_MATCH_REGEX: new RegExp('Icons/ic_', 'i'),
      FILENAME_REGEX: new RegExp('ic_.*?(?=_)', 'i'),
      DIST: '/src/assets/small-icons',
      FORMAT: 'svg',
    },
    /* {
      KEY: 'HRZ7e1cavrTf5yQ52ej3pLxn',
      SHOULD_MATCH_REGEX: new RegExp('Slidericon/ic_.*idle.*96px', 'i'),
      FILENAME_REGEX: new RegExp('[^Slidericon/ic_].*', 'i'),
      DIST: '/src/assets/multicolor-icons',
      FORMAT: 'svg',
    }, */
  ],
};
