<template>
  <div>
    <h1 class="pageTitle">Login</h1>
    <SbcLogin :redirectUrl="redirectUrl" />
  </div>
</template>

<script lang="ts">
// Libraries
import { defineComponent, ref } from 'vue'
// Components
import SbcLogin from '../../src/components/SbcLogin.vue'

export default defineComponent({
  components: {
    SbcLogin
  },
  setup() {
    const redirectUrl = ref('')

    return {
      redirectUrl
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

::v-deep .sbc-signin-button {
  width: 100%;
}
</style>
