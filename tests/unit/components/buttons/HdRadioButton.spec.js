import { mount } from '@vue/test-utils';
import HdRadioButton from '@/components/buttons/HdRadioButton.vue';

const desktopIcon = 'desktop-icon-url';
const desktopIconHover = 'desktop-icon-hover-url';
const mobileIcon = 'mobile-icon-url';

describe('HdRadioButton', () => {
  let wrapper;

  const name = 'lorem';
  const value = 'ipsum';
  const label = 'dolor';
  const mockedSelect = jest.fn();

  beforeEach(() => {
    wrapper = mount(HdRadioButton, {
      propsData: {
        name,
        value,
        label,
        desktopIcon,
        desktopIconHover,
        mobileIcon,
      },
    });

    wrapper.setMethods({ select: mockedSelect });
  });

  test('the component is rendered', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('on change, the proper method is invoked', () => {
    const input = wrapper.find('input');

    expect(input.attributes().name).toBe(name);
    expect(input.attributes().value).toBe(value);

    expect(wrapper.find('label').text()).toBe(label);

    input.trigger('change');

    expect(mockedSelect).toHaveBeenCalled();
  });
});
