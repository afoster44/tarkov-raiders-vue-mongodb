import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class RaidService {
  async createRaid(raid) {
    try {
      const res = await api.post('api/raids', raid)
      logger.log(res)
      AppState.raids += res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getRaids() {
    try {
      const res = await api.get('api/raids')
      logger.log(res)
      AppState.raids = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getRaid(id) {
    try {
      const res = await api.get('api/raids/' + id)
      logger.log(res.data)
      AppState.raid = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const raidService = new RaidService()
