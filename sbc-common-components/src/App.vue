<template>
  <v-app id="app">
    <div
      ref="headerGroup"
      class="header-group"
    >
    <link rel="shortcut icon" href="#" />
      <sbc-loader :show="false" />
      <sbc-header class="sbc-header" :in-auth="false" :show-login-menu="true"
      >
        <template #login-button-text>
          Log in with BC Services Card
        </template>
      </sbc-header>
      <v-snackbar
        v-model="showNotification"
        location="bottom"
        color="primary"
        class="mb-6"
        :timeout="6000"
      >
        <span v-html="notificationText" />
        <v-btn
          icon
          color="default"
          aria-label="Close Notification"
          title="Close Notification"
          @click="showNotification = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
      <!-- Alert banner -->
      <v-alert
        v-if="bannerText"
        rounded="0"
        density="compact"
        type="warning"
        class="mb-0 text-center color-dk-text"
      />
    </div>
    <div id="nav">
        <v-row justify="center">
          <v-col cols="12" md="7">
            <router-link to="/">Main</router-link> |
            <router-link to="/AuthMenu">Auth Menu</router-link> |
            <router-link to="/BrowserVersionAlert">Browser Version Alert</router-link> |
            <router-link to="/LoadingScreen">Loading Screen</router-link> |
            <router-link to="/Loader">Loader</router-link> |
            <router-link to="/Login">Login</router-link> |
            <router-link to="/MobileDeviceAlert">Mobile Device Alert</router-link> |
            <router-link to="/NotificationPanel">Notification Panel</router-link> |
            <router-link to="/ProductSelector">Product Selector</router-link> |
            <router-link to="/SignIn">Sign In</router-link> |
            <router-link to="/SignOut">Sign Out</router-link> |
            <router-link to="/SystemBanner">System Banner</router-link> 
          </v-col>
        </v-row>
      </div>
    <div class="app-body">
      <slot>
       <router-view />
      </slot>
    </div>
    <sbc-footer :aboutText="aboutText" />
  </v-app>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router' // Import useRouter from vue-router
import SbcFooter from '/src/components/SbcFooter.vue'
import SbcHeader from '/src/components/SbcHeader.vue'
import SbcLoader from '/src/components/SbcLoader.vue'
import { LDFlags, Pages, SessionStorageKeys } from '@/util/constants'
import LaunchDarklyService from '../src/services/launchdarkly.services'

export default {
  components: {
    SbcHeader,
    SbcFooter,
    SbcLoader
  },
  setup () {
    const store = useStore()
    const router = useRouter() // Access the router information using useRouter

    const showNotification = ref(false)
    const notificationText = ref('')
    const showLoading = ref(true)
    const toastType = 'primary'
    const toastTimeout = 6000
    const logoutUrl = ''

    const currentAccountSettings = computed(() => store.state.org.currentAccountSettings)
    const permissions = computed(() => store.state.org.permissions)
    const currentUser = computed(() => store.state.user.currentUser)
    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])

    const showNavigationBar = computed(() => router.currentRoute.value.meta.showNavBar) // Use router instead of $route
    const showLoginMenu = computed(() => router.currentRoute.value.path !== `/${Pages.LOGIN}`) // Use router instead of $route

    const bannerText = computed(() => {
      const bannerText = LaunchDarklyService.getFlag(LDFlags.BannerText)
      return bannerText?.trim() || null
    })

    const aboutText = "SBC Common Components being upgraded to Vue 3"

    const setCurrentOrganization = (value) => store.commit('org/setCurrentOrganization', value)
    const loadUserInfo = () => store.dispatch('user/loadUserInfo')

    onMounted(() => {
      sessionStorage.setItem(SessionStorageKeys.StatusApiUrl,
        'https://status-api-dev.apps.silver.devops.gov.bc.ca/api/v1')
      showLoading.value = false
    })

    return {
      showNotification,
      notificationText,
      showLoading,
      toastType,
      toastTimeout,
      logoutUrl,
      currentAccountSettings,
      permissions,
      currentUser,
      isAuthenticated,
      showNavigationBar,
      showLoginMenu,
      bannerText,
      aboutText,
      setCurrentOrganization,
      loadUserInfo
    }
  }
}
</script>

<style lang="scss">
@import "../src/assets/scss/base.scss";

#nav {
  padding: 5px;
  text-align: justify;
  text-align-last: center;
  z-index: 1;

  a {
    font-weight: bold;
    color: #adb5bd;

    &.router-link-exact-active {
      color: #003366;
    }

    &:hover {
      color: #2de0a5;
    }
  }
}

.navCol {
  padding: 10px;
  text-align: justify;
  text-align-last: center;
}

.app-container {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
}

.header-group {
  position: sticky;
  position: -webkit-sticky; /* For Safari support */
  top: 0;
  width: 100%;
  z-index: 2;
}

.pageTitle {
  font-size: 3rem;
  font-weight: bold;
  color: #003366;
  text-align: justify;
  text-align-last: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  text-decoration: underline;
  text-decoration-color: #fcba19;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.app-body {
  flex: 1 1 auto;
  position: relative;
}

.disabled {
  pointer-events: none;
  background: red;
  opacity: 0.24;
}
</style>
