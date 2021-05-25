import BaseController from '../utils/BaseController'
import { raidsService } from '../services/RaidsService'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class RaidsController extends BaseController {
  constructor() {
    super('api/raids')
    this.router
      .get('', this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const data = await raidsService.find()
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      const data = await raidsService.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
