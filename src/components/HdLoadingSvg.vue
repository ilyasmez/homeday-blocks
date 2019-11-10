<template>
  <div class="HdLoading">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640">
      <g fill="#1c3553">
        <path d="M539.58 5.4C522.48 5.4 449.29 5.4 320 5.4L577.45 246.32C577.59 122.18 577.59 54.48 577.45 43.21C577.23 26.3 560.49 5.4 539.58 5.4Z" id="top-right" />
        <path d="M100.42 5.4C117.52 5.4 190.71 5.4 320 5.4L62.55 246.32C62.41 122.18 62.41 54.48 62.55 43.21C62.77 26.3 79.51 5.4 100.42 5.4Z" id="top-left" />
        <path d="M576.12 340.22L577.55 338.78C577.55 284.11 577.55 253.74 577.55 247.67C577.55 236.66 572.79 226.84 565.29 219.91C565.31 219.91 565.36 219.91 565.47 219.91L345.72 15.51C345.62 15.51 345.57 15.51 345.55 15.51C338.81 9.29 329.89 5.4 320 5.4C310.11 5.4 301.19 9.29 294.45 15.51C294.44 15.51 294.38 15.51 294.28 15.51L74.53 219.91C74.64 219.91 74.69 219.91 74.7 219.91C67.22 226.84 62.45 236.66 62.45 247.67C62.45 282.58 62.45 561.83 62.45 596.73C62.45 617.64 79.38 634.6 100.26 634.6C112.39 634.6 173.03 634.6 282.2 634.6L576.12 340.22Z" id="body" />
        <path d="M577.52 596.63C577.52 579.53 577.53 493.58 577.55 338.78L282.19 634.6C442.83 634.57 528.87 634.57 540.31 634.6C557.46 634.63 577.52 617.54 577.52 596.63Z" id="bottom-right" transform="translate(-.5, -.5)"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HdLoading',
};
</script>

<style lang="scss" scoped>
.HdLoading {
  width: 200px;

  #body {
    // fill-opacity: .3;
  }
  #top-right {
    transform-origin: 70% 20%;
    animation: top-right 1s 0s ease-in forwards;
  }
  #top-left {
    transform-origin: 30% 20%;
    animation: top-left 1s .7s ease-in forwards;
  }
  #bottom-right {
    transform-origin: 66.95% 76.35%;
    animation: bottom-right 1.5s 1.5s ease forwards;
  }

  @keyframes top-right {
    to {
      fill: darken($cello, 10);
      transform: rotate3d(1, .94, 0, 180deg);
    }
  }

  @keyframes top-left {
    to {
      fill: darken($cello, 10);
      transform: rotate3d(-1, .94, 0, 180deg);
    }
  }

  @keyframes bottom-right {
    30% {
      fill: $cello;
    }
    31% {
      fill: $vivid-blue;
    }
    100% {
      fill: $vivid-blue;
      transform: rotate3d(1, -1, 0, 180deg);
    }
  }
}
</style>
