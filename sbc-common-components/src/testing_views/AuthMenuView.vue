<template>
  <div>
    <h1 class="pageTitle">Auth Menu</h1>
    <SbcAuthMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SbcAuthMenu from '../../src/components/SbcAuthMenu.vue';

export default defineComponent({
  components: {
    SbcAuthMenu
  },
  computed: {
    redirectUrl() {
      return this.$route.query.redirect as string;
    }
  }
});
</script>


<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';
</style>
