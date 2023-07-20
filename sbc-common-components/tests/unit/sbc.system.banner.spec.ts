import { mount } from '@vue/test-utils';
import SbcSystemBanner from '@/components/SbcSystemBanner.vue';
import vuetify from './setup';


describe('SbcSystemBanner', () => {
  it('renders the message correctly', () => {
    const message = 'This is a test message';
    const wrapper = mount(SbcSystemBanner, {
      props: {
        setMessage: message,
        setShow: true,
        setDismissible: true,
        setType: 'success'
      },
      global: {
        plugins: [vuetify]
        }
    });
    expect(wrapper.find('.v-alert__content').text()).toContain(message);
});

  it('displays the close icon when dismissible is true', () => {
    const wrapper = mount(SbcSystemBanner, {
      props: {
        setMessage: 'this is a test',
        setShow: true,
        setDismissible: true,
        setType: 'success'
      },
      global: {
        plugins: [vuetify]
        }
    });
    const closeButton = wrapper.find('.v-alert__close');
    expect(closeButton.exists()).toBe(true);
  });

  it('does not display the close icon when dismissible is false', () => {
    const wrapper = mount(SbcSystemBanner, {
      props: {
        setMessage: 'this is a test',
        setShow: true,
        setDismissible: false,
        setType: 'success'
      },
    global: {
        plugins: [vuetify]
    }
    });
    const closeButton = wrapper.find('.v-alert__close');
    expect(closeButton.exists()).toBe(false);
  });

  it('sets the type correctly', () => {
    const type = 'success';
    const wrapper = mount(SbcSystemBanner, {
      props: {
        setMessage: 'this is a test',
        setShow: true,
        setDismissible: true,
        setType: 'success'      },
      global: {
        plugins: [vuetify]
        }
    });

    expect(wrapper.find('.v-alert').classes()).toContain(`bg-${type}`);
});

  it('shows the banner when show is true', () => {
    const wrapper = mount(SbcSystemBanner, {
      props: {
        setMessage: 'this is a test',
        setShow: true,
        setDismissible: true,
        setType: 'success'      },
      global: {
        plugins: [vuetify]
        }
    });

    expect(wrapper.find('.v-alert__content')).not.toContain('v-alert--hidden');
  });

  it('hides the banner when show is false', () => {
    const wrapper = mount(SbcSystemBanner, {
      props: {
        setMessage: 'this is a test',
        setShow: false,
        setDismissible: true,
        setType: 'success'      },
      global: {
        plugins: [vuetify]
        }
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toBe('');
 });
});
