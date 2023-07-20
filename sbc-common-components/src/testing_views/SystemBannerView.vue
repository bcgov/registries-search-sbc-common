<template>
  <div>
    <h1 class="pageTitle">System Banners</h1>
    <SbcSystemBanner 
    :setDismissible="true"
    setMessage="Success Banner"
    :setShow="true"
    setType="success"
    setIcon="mdi-apple">
  </SbcSystemBanner>
    <SbcSystemBanner 
    :setDismissible="true"
    setMessage="Info Banner"
    :setShow="true"
    setType="info"
    setIcon="mdi-football-helmet">
  </SbcSystemBanner>
    <SbcSystemBanner
    :setDismissible="true"
    setMessage="Warning Banner"
    :setShow="true"
    setType="warning"
    setIcon="mdi-panda">
  </SbcSystemBanner>
    <SbcSystemBanner
    :setDismissible="true"
    setMessage="Error Banner"
    :setShow="true"
    setType="error"
>
  </SbcSystemBanner>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SbcSystemBanner from '../../src/components/SbcSystemBanner.vue'

export default defineComponent({
  components: {
    SbcSystemBanner
  },
  computed: {
    redirectUrl(): string {
      return this.$route.query.redirect as string
    }
  }
})
</script>
