import { Module, VuexModule } from 'vuex-module-decorators'

export interface UserTerms {
  id: number
}

@Module({
  name: 'user',
  namespaced: true
})
export default class UserModule extends VuexModule {

}
