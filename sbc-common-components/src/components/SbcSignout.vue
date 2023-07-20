<template>
  <loading-screen :is-loading="isLoading"></loading-screen>
</template>

<script lang="ts">
import KeyCloakService from '../../src/services/keycloak.services'
import LoadingScreen from './LoadingScreen.vue'
export default {
  components: {
    LoadingScreen
  },
  props: {
    redirectUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLoading: true
    }
  },
  async created() {
    await KeyCloakService.logout(
      this.redirectUrl ? decodeURIComponent(this.redirectUrl) : undefined
    )
  }
}
</script>

<style lang="scss" scoped></style>
