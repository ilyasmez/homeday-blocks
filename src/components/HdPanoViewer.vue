<template>
  <div class="pano__wrapper">
    <div id="pano"></div>
  </div>
</template>

<script>
import pannellum from 'pannellum';
import 'pannellum/build/pannellum.css';

console.log('pannellum', pannellum);

export default {
  name: 'HdPanoViewer',
  data() {
    return {
      viewer: window.pannellum.viewer,
    };
  },
  mounted() {
    console.log('viewer', this.viewer);
    this.init();
  },
  methods: {
    init() {
      this.viewer('pano', {
        default: {
          firstScene: 'real',
          author: 'Ilyas Amezouar',
          sceneFadeDuration: 1000,
        },
        scenes: {
          real: {
            title: 'Real/CBO Squad',
            hfov: 110,
            pitch: -3,
            yaw: 117,
            type: 'equirectangular',
            panorama: 'https://realtor-app-test.s3.eu-central-1.amazonaws.com/real-cbo.jpg',
            hotSpots: [
              {
                pitch: -2.1,
                yaw: 132.9,
                type: 'scene',
                text: 'CX squad',
                sceneId: 'cx',
              },
            ],
          },
          cx: {
            title: 'CX Squad',
            hfov: 110,
            yaw: 5,
            type: 'equirectangular',
            panorama: 'https://realtor-app-test.s3.eu-central-1.amazonaws.com/cx.jpg',
            hotSpots: [
              {
                pitch: -0.6,
                yaw: 37.1,
                type: 'scene',
                text: 'Real/CBO Squad',
                sceneId: 'real',
                targetYaw: -23,
                targetPitch: 2,
              },
            ],
          },
        },
      });
    },
  },
};
</script>

<style lang="scss">
// TODO: scope the styles
// TODO: remove the .sb-show-main rules
.sb-show-main {
  padding: 0;
}

.pano {
  width: 100%;
  height: 100%;

  &__wrapper {
    width: 100vw;
    height: 100vh;
  }
}
</style>
