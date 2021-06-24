import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class RaidService {
  async createRaid(raid) {
    try {
      const res = await api.post('api/raids', raid)
      console.log(res)
      AppState.raids += res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getRaids() {
    try {
      const res = await api.get('api/raids')
      console.log(res)
      AppState.raids = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const raidService = new RaidService()
