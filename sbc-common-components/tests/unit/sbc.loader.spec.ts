import { mount } from '@vue/test-utils';
import SbcLoader from '@/components/SbcLoader.vue';
import vuetify from './setup';

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));

describe('SbcLoader', () => {
  it('renders the progress indicator when "show" prop is true', () => {
    const wrapper = mount(SbcLoader, {
      props: {
        show: true,
      },
      global: {
        plugins: [vuetify],
        },
    });

    expect(wrapper.find('.v-progress-circular').exists()).toBe(true);
  });

  it('does not render the progress indicator when "show" prop is false', () => {
    const wrapper = mount(SbcLoader, {
      props: {
        show: false,
      },
        global: {
            plugins: [vuetify],
        },
    });

    expect(wrapper.find('.v-progress-circular').exists()).toBe(false);
  });

  it('displays the provided message when "show" prop is true', () => {
    const message = 'Loading...';
    const wrapper = mount(SbcLoader, {
      props: {
        show: true,
        message,
      },
      global: {
        plugins: [vuetify],
        },
    });

    expect(wrapper.find('span').text()).toBe(message);
  });

  it('does not display the message when "show" prop is false', () => {
    const message = 'Loading...';
    const wrapper = mount(SbcLoader, {
      props: {
        show: false,
        message,
      },
        global: {
            plugins: [vuetify],
        },
    });

    expect(wrapper.find('span').exists()).toBe(false);
  });

  it('applies the provided progressColor to the progress indicator', () => {
    const progressColor = 'rgb(0, 0, 255)';
    const wrapper = mount(SbcLoader, {
      props: {
        show: true,
        progressColor,
      },
        global: {
            plugins: [vuetify],
        },
    });
    
    expect(wrapper.find('.v-progress-circular').attributes('style')).toContain(`color: ${progressColor}`);});
});
