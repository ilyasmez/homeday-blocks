/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { HdIcon } from 'homeday-blocks';
import bigIcon from 'homeday-blocks/src/assets/big-icons/ic_apartment.svg';
import multiColorIcon from 'homeday-blocks/src/assets/multi-colors/ic_chimney.svg';

storiesOf('HdIcon', module)
  .add('simple', () => ({
    components: { HdIcon },
    data() {
      return {
        icon: bigIcon,
      };
    },
    template: `
      <HdIcon
        :src="icon"
      />
    `,
  }), { percy: { skip: true } })
  .add('multi-color', () => ({
    components: { HdIcon },
    data() {
      return {
        icon: multiColorIcon,
      };
    },
    template: `
      <div>
        <HdIcon
          :src="icon"
          :colors="{'color-1': 'red', 'color-2': 'blue'}"
        />
      </div>
    `,
  }), { percy: { skip: true } });
