/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import HdInput from 'hd-blocks/components/form/HdInput.vue';
import FormWrapper from 'hd-blocks/storiesWrappers/FormWrapper';

storiesOf('Form/HdInput', module)
  .addDecorator(FormWrapper)
  .add('required', () => ({
    components: { HdInput },
    template: `
      <hd-input
        v-model="value"
        :required="true"
        name="test"
        label="Label"
        placeholder="Placeholder..."
      />
    `,
    data() {
      return {
        value: '',
      };
    },
    watch: {
      value(value) {
        action('input')(value);
      },
    },
  }))
  .add('prefilled', () => ({
    methods: { onDataChange: action('dataChange') },
    components: { HdInput },
    template: `
      <hd-input
        v-model="value"
        name="test"
        label="Label"
        placeholder="Placeholder..."
      />
    `,
    data() {
      return {
        value: 'Your default value goes here',
      };
    },
    watch: {
      value(value) {
        action('input')(value);
      },
    },
  }))
  .add('password', () => ({
    components: { HdInput },
    template: `
      <hd-input
        v-model="value"
        name="password"
        label="Password"
        type="password"
      />
    `,
    data() {
      return {
        value: '',
      };
    },
    watch: {
      value(value) {
        action('input')(value);
      },
    },
  }))
  .add('email', () => ({
    components: { HdInput },
    template: `
      <hd-input
        v-model="value"
        name="email"
        label="Email"
        placeholder="jane.doe@homeday.de"
        type="email"
      />
    `,
    data() {
      return {
        value: '',
      };
    },
    watch: {
      value(value) {
        action('input')(value);
      },
    },
  }))
  .add('number', () => ({
    components: { HdInput },
    template: `
      <hd-input
        v-model="value"
        :min="0"
        :max="99"
        name="number"
        label="Number"
        placeholder=">= 0, < 100"
        type="number"
      />
    `,
    data() {
      return {
        value: '',
      };
    },
    watch: {
      value(value) {
        action('input')(value);
      },
    },
  }))
  .add('custom translation', () => ({
    components: { HdInput },
    template: `
      <hd-input
        v-model="value"
        :required="true"
        :texts="texts"
        name="test"
        label="Label"
        placeholder="Placeholder..."
      />
    `,
    data() {
      return {
        value: '',
        texts: {
          FORM: {
            VALIDATION: {
              REQUIRED: 'Hey you, yeah you! Fill it out!',
            },
          },
        },
      };
    },
    watch: {
      value(value) {
        action('input')(value);
      },
    },
  }));
