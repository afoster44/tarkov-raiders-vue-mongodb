import { api } from './AxiosService'

class RaidService {
  async createRaid(raid) {
    const res = await api.post('api/raids', raid)
    console.log(res)
  }
}

export const raidService = new RaidService()
