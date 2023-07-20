import { mount } from '@vue/test-utils';
import SbcFooter from '@/components/SbcFooter.vue';
import vuetify from './setup';

describe('SbcFooter', () => {
  it('renders the component', () => {
    const wrapper = mount(SbcFooter, {
      props: {
        isLoading: true,
      },
      global: {
        plugins: [vuetify],
      },
    });       
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct navigation links', () => {
    const wrapper = mount(SbcFooter, {
      props: {
        isLoading: true,
      },
      global: {
        plugins: [vuetify],
      },
    });   
    const links = wrapper.findAll('nav ul li a');

    expect(links.length).toBe(5);
    expect(links[0].attributes('href')).toBe('/');
    expect(links[1].attributes('href')).toBe('https://www2.gov.bc.ca/gov/content/home/disclaimer');
    expect(links[2].attributes('href')).toBe('https://www2.gov.bc.ca/gov/content/home/privacy');
    expect(links[3].attributes('href')).toBe('https://www2.gov.bc.ca/gov/content/home/accessibility');
    expect(links[4].attributes('href')).toBe('https://www2.gov.bc.ca/gov/content/home/copyright');
  });

  it('renders the about tooltip when aboutText prop is provided', async () => {
    const wrapper = mount(SbcFooter, {
      props: {
        aboutText: "This is a test",
      },
      global: {
        plugins: [vuetify],
      },
    });    
    const tooltipContent = wrapper.find('.mdi-information-outline');
    expect(tooltipContent.exists()).toBe(true);
  });

  it('does not display the tooltip when aboutText prop is not provided', () => {
    const wrapper = mount(SbcFooter, {
      props: {
        isLoading: true,
      },
      global: {
        plugins: [vuetify],
      },
    });     
    const tooltipContent = wrapper.find('.mdi-information-outline');
    expect(tooltipContent.exists()).toBe(false);
  });
});
