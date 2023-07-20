<template>
  <v-alert class="py-2"
  v-model="show"
  :type="type"
  close-icon="mdi-close-circle mdi-24px mt-3"
  :closable="dismissible"
  :prominent="true">
    <div class="px-3">
      <span v-html="message"></span>
    </div>
  </v-alert>
</template>

<script lang="ts">
// External
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'SbcSystemBanner',
  props: {
    setDismissible: { default: false },
    setIcon: { default: 'mdi-information' }, // See https://material.io/resources/icons/?style=baseline for accepted values
    setMessage: { default: '' },
    setShow: { default: false },
    setType: { default: 'warning' }
  },
  setup (props) {
    const state = reactive({
      dismissible: computed(() => { return props.setDismissible }),
      icon: computed(() => { return props.setIcon }),
      message: computed(() => { return props.setMessage }),
      show: computed(() => { return props.setShow }),
      type: computed(() => { return props.setType as 'info' | 'warning' | 'error' | 'success' })
    })
    return {
      ...state
    }
  }
})
</script>

<style lang="scss" scoped>
.v-alert {
  border-radius: 0;
  margin-top: 10px;
}
.close-icon{
  font-size: 30px;
}
.v-alert :deep(.v-alert__wrapper) {
  margin: 0;
  overflow: hidden;
}

:deep(.v-alert__content) {
  max-width: 1360px;  // should match sbc header / breadcrumb max widths
  width: 100%;
}
</style>
