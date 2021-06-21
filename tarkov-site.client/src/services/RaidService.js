import { AppState } from '../AppState'
import { api } from './AxiosService'

class RaidService {
  async createRaid(raid) {
    const res = await api.post('api/raids', raid)
    console.log(res)
    AppState.raids += res.data
  }

  async getRaids() {
    const res = await api.get('api/raids')
    console.log(res)
    AppState.raids = res.data
  }
}

export const raidService = new RaidService()
