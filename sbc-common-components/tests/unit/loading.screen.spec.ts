import { mount } from '@vue/test-utils';
import LoadingScreen from '../../src/components/LoadingScreen.vue';
import vuetify from './setup'

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));

describe('loading screen component', () => {
  it('renders v progress circular when isLoading is true', () => {
    const wrapper = mount(LoadingScreen, {
      props: {
        isLoading: true,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const progressCircular = wrapper.find('.v-loader');
    expect(progressCircular.exists()).toBe(true);
  });

  it('does not render v progress circular when isLoading is false', () => {
    const wrapper = mount(LoadingScreen, {
      props: {
        isLoading: false,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const progressCircular = wrapper.find('.v-loader');
    expect(progressCircular.exists()).toBe(false);
  });
});
