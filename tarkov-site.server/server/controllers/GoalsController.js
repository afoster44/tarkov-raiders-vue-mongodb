import { Auth0Provider } from '@bcwdev/auth0provider'
import { goalsService } from '../services/GoalsService'
import BaseController from '../utils/BaseController'

export class GoalsController extends BaseController {
  constructor() {
    super('api/goals')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
  }

  async getAll(req, res, next) {
    try {
      const data = await goalsService.find()
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const data = await goalsService.findById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      const data = await goalsService.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      const data = await goalsService.edit(req.body, req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
