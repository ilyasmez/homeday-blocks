/* eslint-disable import/no-extraneous-dependencies, no-console */
import { storiesOf } from '@storybook/vue';

import HdPanoViewer from 'hd-blocks/components/HdPanoViewer.vue';

storiesOf('HdPanoViewer', module)
  .add('default', () => ({
    components: { HdPanoViewer },
    template: `
      <div>
        <HdPanoViewer />
      </div>
    `,
  }));
