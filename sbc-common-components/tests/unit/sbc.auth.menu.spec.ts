import { mount,VueWrapper } from '@vue/test-utils';
import SbcAuthMenu from '@/components/SbcAuthMenu.vue';
import { createStore } from 'vuex';
import { createVueRouter } from './setup';
import AccountModule from '@/store/modules/account';
import AuthModule from '@/store/modules/auth';
import vuetify from './setup';

describe('SbcAuthMenu', () => {
    let wrapper: VueWrapper<any>;
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
        wrapper = mount(SbcAuthMenu, {
          global: {
            plugins: [store, vuetify, router]
          }
        });
      });
    
 it('is visible', () => {
     expect(wrapper.isVisible()).toBe(true);
    });
    
  it('renders the login options correctly', () => {
    const loginOptions = wrapper.findAll('.items');
    expect(loginOptions).toHaveLength(3); // Assuming there are three login options
  });
});
