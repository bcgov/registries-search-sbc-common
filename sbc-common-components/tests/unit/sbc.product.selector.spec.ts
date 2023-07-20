import { shallowMount } from '@vue/test-utils';
import SbcProductSelector from '@/components/SbcProductSelector.vue';
import vuetify from './setup';
import { createStore } from 'vuex';
import ProductModule from '@/store/modules/product';

describe('SbcProductSelector', () => {
    let store: any;
    beforeEach(() => {
        // Create a new Vuex store instance with the required modules
        store = createStore({
          modules: {
            product: ProductModule,
          },
        });
      });

  it('renders the component', () => {
    const wrapper = shallowMount(SbcProductSelector, {
        global: {
            plugins: [store, vuetify]
            }
            });
    expect(wrapper.exists()).toBe(true);
  });

});
