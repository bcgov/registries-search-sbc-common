import { mount } from '@vue/test-utils';
import SbcHeader from '@/components/SbcHeader.vue';
import vuetify from './setup';
import { createStore } from 'vuex';
import { createVueRouter } from './setup';
import AccountModule from '@/store/modules/account';
import AuthModule from '@/store/modules/auth';
import NotificationModule from '@/store/modules/notification'


describe('SbcHeader', () => {
    let store: any;
    let router: any;   

    beforeEach(() => {
        // Create a new Vuex store instance with the required modules
        store = createStore({
          modules: {
            account: AccountModule,
            auth: AuthModule,
            notification: NotificationModule
          },
        });
        router = createVueRouter();

    });
  it('renders the brand title correctly', () => {
    const wrapper = mount(SbcHeader, {
        global: {
            plugins: [store, vuetify, router]
        }
    });
    const header = wrapper.find('.app-header');
    expect(header.exists()).toBe(true);
  });

  //add more comprehensive tests here
});
