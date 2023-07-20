<template>
  <div>
    <h1 class="pageTitle">Sign Out</h1>
    <SbcSignout :redirect-url="redirectbackUrl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ConfigHelper from '@/util/config-helper';
import SbcSignout from '../../src/components/SbcSignout.vue';

export default defineComponent({
  components: {
    SbcSignout,
  },
  props: {
    Url: {
      type: String,
      default: 'home',
    },
  },
  computed: {
    redirectbackUrl(): string {
      return this.$route.query.redirect as string
    }
  }

});
</script>

<style lang="scss" scoped>
.pageTitle {
  position: absolute;
  font-size: 3rem;
  font-weight: bold;
  color: #003366;
  text-align: justify;
  text-align-last: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: #fcba19;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
</style>
