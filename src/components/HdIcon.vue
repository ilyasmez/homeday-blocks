<template>
  <inline-svg
    v-bind="$attrs"
    :transform-source="transform"
  />
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'HdIcon',
  inheritAttrs: false,
  components: {
    InlineSvg,
  },
  props: {
    colors: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    transform(svg) {
      const paths = svg.querySelectorAll('path');
      paths.forEach((path) => {
        const className = path.getAttribute('class');
        const fill = this.colors[className];
        path.setAttribute('fill', fill);
      });

      return svg;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
