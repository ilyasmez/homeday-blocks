<template>
  <div class="animated-logo">
    <div class="animated-logo__top-right" />
    <div class="animated-logo__top-left" />
    <div
      :style="{
        width: `${width}px`,
        height: `${height}px`,
      }"
      class="animated-logo__body">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="62.5 5.4 512 625.4">
        <path fill="#1c3553" d="M574.45 336.77C574.45 282.43 574.45 252.24 574.45 246.21C574.45 235.27 569.72 225.51 562.26 218.62C562.28 218.62 562.33 218.62 562.44 218.62C540.6 198.3 365.86 35.77 344.02 15.45C343.92 15.45 343.87 15.45 343.85 15.45C337.15 9.27 328.28 5.4 318.45 5.4C308.62 5.4 299.75 9.27 293.05 15.45C293.04 15.45 292.98 15.45 292.88 15.45C271.04 35.77 96.3 198.3 74.46 218.62C74.57 218.62 74.62 218.62 74.63 218.62C67.19 225.51 62.45 235.27 62.45 246.21C62.45 280.91 62.45 558.48 62.45 593.17C62.45 613.95 79.28 630.81 100.03 630.81C112.09 630.81 172.36 630.81 280.88 630.81C300.35 611.3 397.74 513.77 573.03 338.2C573.88 337.34 574.36 336.87 574.45 336.77Z" id="h4lOYajD5Z"></path>
      </svg>
    </div>
    <div class="animated-logo__bottom-right" />
  </div>
</template>

<script>
const LOGO_VIEWBOX = {
  width: 512,
  height: 625.4,
};

export default {
  name: 'HdAnimatedLogo',
  props: {
    width: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    height() {
      return this.width * (LOGO_VIEWBOX.height / LOGO_VIEWBOX.width);
    },
  },
};
</script>

<style lang="scss" scoped>
.animated-logo {
  position: relative;
  overflow: hidden;

  svg {
    // To fix the extra margin,caused by inline elements and vertical-align: baseline
    vertical-align: middle;
  }

  &__body {
    position: relative;
    width: 256px; // 512px
    height: 312.5px; // 625.4px
  }
  &__top-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 38%;
    background-color: $cello;
    border-top-right-radius: 20%;
    animation: top-right .7s 0s ease-in forwards;
  }
  &__top-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 38%;
    background-color: $cello;
    border-top-left-radius: 20%;
    animation: top-left .7s .5s ease-in forwards;
  }
  &__bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 57%;
    height: 47%;
    background: $cello;
    border-bottom-right-radius: 20%;
    animation: bottom-right 1s 1s ease-in forwards;
  }

  /*
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
  */
  @keyframes top-right {
    to {
      background-color: darken($cello, 3);
      transform: rotate3d(1, .94, 0, 90deg);
    }
  }

  @keyframes top-left {
    to {
      background-color: darken($cello, 3);
      transform: rotate3d(-1, .94, 0, 90deg);
    }
  }

  @keyframes bottom-right {
    65.9% {
      background: $cello;
    }
    66% {
      background: linear-gradient(to bottom right, rgba($vivid-blue, 0) 50%, $vivid-blue 50%);
    }
    100% {
      background: linear-gradient(to bottom right, rgba($vivid-blue, 0) 50%, $vivid-blue 50%);
      transform: rotate3d(1, -1, 0, 180deg);
    }
  }
}
</style>
