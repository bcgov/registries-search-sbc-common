import { AxiosResponse } from 'axios'
import ConfigHelper from '@/util/config-helper'
import { axios } from '../../src/util/http-util'

export default class DocumentService {
  static async getTermsOfService (identifier: string): Promise<AxiosResponse> {
    return axios.get(`${ConfigHelper.getAuthAPIUrl()}/documents/${identifier}`)
  }
}
