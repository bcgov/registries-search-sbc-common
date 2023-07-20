<template>
    <v-progress-circular
      v-if="show"
      size="50"
      width="5"
      :color="progressColor"
      :indeterminate="true"
      :z-index="9"
    />
    <span v-if="show" class="ml-3">{{ message }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: 'Account Switching In Progress'
  },
  progressColor: {
    type: String,
    default: ''
  }
})
</script>
