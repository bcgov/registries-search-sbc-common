import { defineComponent, ref } from 'vue'
import ConfigHelper from '../util/config-helper'
import { RouteLocationNormalized } from 'vue-router'

export default defineComponent({
  redirectToPath (inAuth: boolean, routePath: string) {
    if (inAuth) {
      this.redirectInTriggeredApp(routePath)
    } else {
      window.location.assign(`${ConfigHelper.getAuthContextPath()}/${routePath}`)
    }
  },

  redirectInTriggeredApp (routePath: string) {
    const resolvedRoutes = this.$router.resolve({ path: `/${routePath}` }) as RouteLocationNormalized
    if (resolvedRoutes.matched.length > 0) {
      this.$router.push(`/${routePath}`)
    } else {
      // navigate to auth app if route is not found in the triggered app
      window.location.assign(`${ConfigHelper.getAuthContextPath()}/${routePath}`)
    }
  }
})
