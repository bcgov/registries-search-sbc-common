<template>
  <div v-if="showNotifications" v-on:clickout="emitClose()">
    <v-overlay model-value persistent :z-index="1" scroll-strategy="none">
    </v-overlay>
    <v-navigation-drawer app location="right" :width="440">
      <div class="app-bar">
        <v-toolbar-title app class="toolbar-title pl-4 pt-4">What's New at BC Registries</v-toolbar-title>
        <v-btn icon="mdi-close" variant="text" flat class="dialog-close" @click="emitClose()">
        </v-btn>
      </div>
      <v-list flat>
        <v-list-group color="primary">
          <!-- eslint-disable-next-line -->
          <template v-for="(item, i) in notifications" :key="i">
            <v-list-item>
              <v-row dense>
                <v-col class="d-flex" cols="1">
                  <span :class="!item.read && (item.priority ? 'dot-red' : 'dot-blue')">
                  </span>
                </v-col>
                <v-col>
                  <v-list-item>
                    <v-list-item-title class="font-weight-bold list-subtitle">{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
                    <v-spacer></v-spacer>
                    <!-- eslint-disable-next-line -->
                    <v-list-item v-html="item.description"></v-list-item>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider v-if="i < notifications.length - 1" :key="`${i}-divider`"></v-divider>
          </template>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Notification } from '../../src/models/notification'
import NotificationModule from '../../src/store/modules/notification'
import { computed, defineComponent, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import 'clickout-event'

export default defineComponent({
  name: 'NotificationPanel',
  props: {
    showNotifications: { default: false }
  },
  setup(props, { emit }) {
    const store = useStore()
    // set modules
    if (!store.hasModule('notification'))
      store.registerModule('notification', NotificationModule)

    //state
    const state = reactive({
      notifications: computed(() => store.state.notification.notifications as Notification[])
    })

    onMounted(async () => {
      getModule(NotificationModule, store)
    })

    const emitClose = (): void => {
        emit('closeNotifications')
    }
    return {
      ...props,  
      ...state,
      emitClose
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../src/assets/scss/theme.scss";

:deep(::-webkit-scrollbar) {
  width: 2px;
}

:deep(::-webkit-scrollbar-thumb) {
  background: black;
  border-radius: 20px;
}

:deep(.v-navigation-drawer--right) {
  transform: translatey($app-header-height) !important;
  height: 100vh;
}

.v-app-bar.v-toolbar.v-sheet {
  background-color: $app-notification-orange !important;
}
.app-bar {
  background-color: $app-notification-orange !important;
  height: 64px;
  display:block;
  border: thin solid rgba(0,0,0,.12);
  border-radius: 0;
}

.dialog-close {
  position: absolute;
  top: 8px;
  right: 4px;
  margin-right: 0px;
  z-index: 2;
  font-weight: bold;
}

:deep(.v-btn:not(.dialog-close) .v-icon.v-icon) {
  font-size: $px-18 !important;
}
 .v-btn {
  font-size: 20px;
  color: inherit;
  background-color: $app-notification-orange !important;
  opacity: 70%;
 }
.v-icon {
  font-size: 28px !important;
  height: 28px;
  opacity : 10%;
}

:deep(.v-btn__content) {
  line-height: inherit;
}

.toolbar-title {
  color: $BCgovBlue5;
  font-size: $px-18;
  font-weight: 700;
}

.list-subtitle {
  font-size: $px-18;
  font-weight: 700;
}

.dot-red {
  height: 8px;
  width: 8px;
  background-color: $app-notification-red !important;
  border-radius: 50%;
  display: inline-block;
  margin-top: 18px;
  margin-left: 10px;
}

.dot-blue {
  @extend .dot-red;
  background-color: $app-notification-blue !important;
}
</style>
