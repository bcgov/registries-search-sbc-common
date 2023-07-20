<template>
  <div>
    <h1 class="pageTitle">Loader</h1>
    <div class="loader">
      <sbc-loader :show="true" message="This is a test of the loader" progressColor="#FF0000"></sbc-loader>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// Components
import SbcLoader from '../../src/components/SbcLoader.vue'

export default defineComponent({
  components: {
    SbcLoader
  },
  computed: {
    redirectUrl() {
      return (this.$route.query.redirect as string);
    }
  }
});
</script>
<style lang="scss">
.loader{
  text-align: justify;
  text-align-last: center;
  justify-content: center;
  align-items: center;
  }
</style>
