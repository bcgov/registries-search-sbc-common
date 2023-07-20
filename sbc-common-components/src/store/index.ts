import Vuex, { StoreOptions } from 'vuex'

import { RootState } from './types'
import StatusModule from '@/store/modules/status'
import AccountModule from '@/store/modules/account'
import AuthModule from '@/store/modules/auth'
import NotificationModule from '@/store/modules/notification'
import ProductModule from '@/store/modules/product'
import UserModule from '@/store/modules/userStub'
import Vue from 'vue'

const debug = process.env.NODE_ENV !== 'production'

const storeOptions: StoreOptions<RootState> = {
  strict: debug,
  state: () => ({
    refreshKey: 0,
    loading: true
  }),
  getters: {
    loading: (state) => state.loading
  },
  mutations: {
    updateHeader (state) {
      state.refreshKey++
    },
    loadComplete (state) {
      state.loading = false
    }
  },
  modules: {
    status: StatusModule,
    account: AccountModule,
    auth: AuthModule,
    notification: NotificationModule,
    product: ProductModule,
    user: UserModule
  }
}

export default new Vuex.Store<RootState>(storeOptions)
