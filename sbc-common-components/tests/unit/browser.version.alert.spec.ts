import { mount } from '@vue/test-utils';
import BrowserVersionAlert from '@/components/BrowserVersionAlert.vue';
import vuetify from './setup';

// Helper function to mock userAgent temporarily
function mockUserAgent(userAgent: string, callback: () => void) {
  const userAgentDescriptor = Object.getOwnPropertyDescriptor(window.navigator, 'userAgent');
  Object.defineProperty(window.navigator, 'userAgent', {
    value: userAgent,
    configurable: true,
  });

  try {
    callback();
  } finally {
    if (userAgentDescriptor) {
      Object.defineProperty(window.navigator, 'userAgent', userAgentDescriptor);
    }
  }
}

describe('BrowserVersionAlert', () => {

  it('renders the component', () => {
    const wrapper = mount(BrowserVersionAlert, 
      {
        global: 
         { plugins: [vuetify] }
       });
    expect(wrapper.exists()).toBe(true);
  });

  it('initializes the browserUnSupported data property to false', () => {
    const wrapper = mount(BrowserVersionAlert, 
      {
        global: 
         { plugins: [vuetify] }
       });    
    expect(wrapper.vm.browserUnSupported).toBe(false);
  });

  it('displays the dialog when the browser is unsupported', () => {
    mockUserAgent('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)', () => {
      const wrapper = mount(BrowserVersionAlert, 
        {
          global: 
           { plugins: [vuetify] }
         });      
      expect(wrapper.vm.browserUnSupported).toBe(true);
    });
  });

  it('does not display the dialog when the browser is supported', () => {
    mockUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', () => {
      const wrapper = mount(BrowserVersionAlert, 
        {
          global: 
           { plugins: [vuetify] }
         });
      expect(wrapper.vm.browserUnSupported).toBe(false);
    });
  });
});
