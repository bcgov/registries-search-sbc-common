import { createStore } from 'vuex'

import StatusModule from './modules/status'
import AccountModule from './modules/account'
import AuthModule from './modules/auth'
import NotificationModule from './modules/notification'
import ProductModule from './modules/product'
import UserModule from './modules/userStub'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
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
)
