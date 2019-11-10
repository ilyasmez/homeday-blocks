/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import HdLoadingSvg from 'hd-blocks/components/HdLoadingSvg.vue';
import HdLoading from 'hd-blocks/components/HdLoading.vue';

storiesOf('HdLoading', module)
  .add('svg', () => ({
    components: { HdLoadingSvg },
    template: `
    <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
      <HdLoadingSvg />
    </div>
    `,
  }))
  .add('div', () => ({
    components: { HdLoading },
    template: `
    <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
      <HdLoading />
    </div>
    `,
  }));
