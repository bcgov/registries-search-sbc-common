import { mount } from '@vue/test-utils'
import MobileDeviceAlert from '@/components/MobileDeviceAlert.vue'
import vuetify from './setup';

describe('MobileDeviceAlert', () => {
  it('renders the component', () => {
    const wrapper = mount(MobileDeviceAlert, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('initializes the mobileDevice ref as false', () => {
    const wrapper = mount(MobileDeviceAlert, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.vm.mobileDevice).toBe(false)
  })

  it('sets mobileDevice to true when user agent matches a mobile device', () => {
    const userAgent = 'Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36'
    Object.defineProperty(window.navigator, 'userAgent', { value: userAgent, writable: true })

    const wrapper = mount(MobileDeviceAlert, {
      global: {
        plugins: [vuetify]
      }
    })    
    expect(wrapper.vm.mobileDevice).toBe(true)
  })

  it('does not set mobileDevice to true when user agent does not match a mobile device', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    Object.defineProperty(window.navigator, 'userAgent', { value: userAgent, writable: true })

    const wrapper = mount(MobileDeviceAlert, {
      global: {
        plugins: [vuetify]
      }
    })    
    expect(wrapper.vm.mobileDevice).toBe(false)
  })

  it.skip('closes the dialog when OK button is clicked', async () => {
    const wrapper = mount(MobileDeviceAlert, {
      global: {
        plugins: [vuetify]
      }
    })    
    wrapper.vm.mobileDevice = true

    expect(wrapper.vm.mobileDevice).toBe(true)

    const okButton = wrapper.find('.mobile-alert-ok-btn')
    await okButton.trigger('click')

    expect(wrapper.vm.mobileDevice).toBe(false)
  })
})
