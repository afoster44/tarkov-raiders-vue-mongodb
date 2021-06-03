import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GoalsService {
  async find(query = {}) {
    const goals = await dbContext.Goals.find(query)
    return goals
  }

  async findById(id) {
    const goal = await dbContext.Goals.findById(id)
    if (!goal) {
      throw new BadRequest('Invalid Id')
    }
    return goal
  }

  async create(body) {
    const goal = await dbContext.Goals.create(body)
    if (!goal) {
      throw new BadRequest('Please provide the proper information needed to create a goal' + goal)
    }
    return goal
  }

  async edit(body, id, userId) {
    const foundGoal = await dbContext.Goals.findById(id)
    /* @ts-ignore**/
    if (foundGoal.creatorId !== userId) {
      throw new BadRequest('You are not the creator!')
    }
    // findOne
    return await dbContext.Goals.findOneAndUpdate({ _id: id }, { title: body.title }, { new: true })
  }
}

export const goalsService = new GoalsService()
