<template>
  <div>
    <h1 class="pageTitle">Mobile Device Alert</h1>
    <h2 class="note">Please refer to the note at the top of MobileDeviceAlertView.vue if you are using this page to test the MobileDeviceAlert component.</h2>
    <br>
    <v-row justify="center">
      <v-card>

         <v-btn
            icon
            color="primary"
            :right="true"
            :absolute="true"
            @click="mobileDevice = false"
            class="mt-1"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        <v-card-title class="justify-center pb-0">
          <v-icon color="red" x-large>mdi-alert-circle-outline</v-icon>
        </v-card-title>

        <v-card-title class="justify-center text-center py-4">
          <div>
            Mobile Device Use is <br />
            not Recommended
          </div>
        </v-card-title>
        <v-card-text class="text-center px-6">
          <p>
            Use of this application with a mobile device is not recommended at this time. You may experience payment issues or other errors which may affect the accuracy of information submitted.
          </p>
          <p class="mb-0">
            It is recommended that you return to this site from your desktop or laptop computer.
          </p>
        </v-card-text>
        <v-card-actions class="justify-center pt-0">
          <v-btn text class="mobile-alert-ok-btn" @click="mobileDevice = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MobileDeviceAlertView',
  setup() {
    const mobileDevice = ref(false)

    return {
      mobileDevice,
      redirectUrl: ''
    }
  }
}
</script>

<style scoped lang="scss">
.note {
  text-align: justify;
  text-align-last: center;
}
</style>
