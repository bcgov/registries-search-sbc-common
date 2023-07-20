<template>
  <div>
    <h1 class="pageTitle" style="position: absolute;">Loading Screen</h1>
    <div>
      <LoadingScreen :isLoading="true"></LoadingScreen>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Components
import LoadingScreen from '../../src/components/LoadingScreen.vue'

export default defineComponent({
  components: {
    LoadingScreen
  },
  computed: {
    redirectUrl() {
      return (this.$route.query.redirect as string)
    }
  }
})
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
