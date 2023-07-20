import { mount } from '@vue/test-utils';
import SbcLogin from '@/components/SbcLogin.vue';
import vuetify from './setup';
import { createStore } from 'vuex';
import { createVueRouter } from './setup';
import AccountModule from '@/store/modules/account';
import AuthModule from '@/store/modules/auth';

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));

describe('SbcLogin', () => {
    let store: any;
    let router: any;

    beforeEach(() => {
        // Create a new Vuex store instance with the required modules
        store = createStore({
          modules: {
            account: AccountModule,
            auth: AuthModule,
          },
        });
        router = createVueRouter();
      });

  it('renders login button with correct label', () => {
    const wrapper = mount(SbcLogin,
        {
            global: {
                plugins: [vuetify, store, router]
        }
    });
    const loginButton = wrapper.find('#loginBtn');
    expect(loginButton.exists()).toBe(true);
    expect(loginButton.text()).toBe('Log in to my BC Registries Account');
  });

  it('sets redirectUrl prop correctly', () => {
    const redirectUrl = '/dashboard';
    const wrapper = mount(SbcLogin, {
      props: {
        redirectUrl: redirectUrl
      },
        global: {
            plugins: [vuetify, store, router]
        }
    });
    expect(wrapper.props('redirectUrl')).toBe(redirectUrl);
  });

  it('displays the image with correct source', () => {
    const imageSource = '/img/BCReg_Generic_Login_image.jpg';
    const wrapper = mount(SbcLogin,
        {
            global: {
                plugins: [vuetify, store, router]
        }
    });
    const image = wrapper.find('img.v-img__img');
    expect(image.exists()).toBe(true);
    expect(image.attributes('src')).toContain(imageSource);
  });
});
