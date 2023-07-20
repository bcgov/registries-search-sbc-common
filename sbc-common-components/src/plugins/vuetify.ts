import '../assets/scss/test.scss'
import '../assets/scss/theme.scss'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1669bb',
          error: '#D3272C',
          grey: '#adb5bd',
          bcgovblue: '#003366',
          bcgovblue2: '#38598A',
          bcgovblueLink: '#1A5A96',
          bcgovgold: '#fcba19',
          navBg: '#001438',
          navMenuBg: '#26527d',
          anchor: '#1A5A96'
        }
      }
    }
  },
  components,
  directives
})
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
