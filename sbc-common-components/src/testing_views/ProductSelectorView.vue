<template>
  <div>
    <h1 class="pageTitle">Product Selector</h1>
    <div class="prod">
      <sbc-product-selector :setStoreBypass="true"/>
    </div>
  </div>
</template>

<script lang="ts">
// Libraries
import { defineComponent } from 'vue'
// Components
import SbcProductSelector from '../components/SbcProductSelector.vue'

export default defineComponent({
  components: {
    SbcProductSelector
  },
  computed: {
    redirectUrl() {
      return (this.$route.query.redirect as string)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

::v-deep .sbc-signin-button {
  width: 100%;
}

.prod {
  text-align: justify;
  text-align-last: center;
  justify-content: center;
  align-items: center;
}
</style>
