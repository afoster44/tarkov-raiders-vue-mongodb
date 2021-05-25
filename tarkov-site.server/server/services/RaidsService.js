import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RaidsService {
  async find(query = {}) {
    const raids = await dbContext.Raids.find(query)
    return raids
  }

  async findById(id) {
    const raid = await dbContext.Raids.findById(id)
    if (!raid) {
      throw new BadRequest('Invalid Id')
    }
    return raid
  }

  async create(body) {
    const raid = await dbContext.Raids.create(body)
    if (!raid) {
      throw new BadRequest('Please provide the proper information needed to create a raid' + raid)
    }
    return raid
  }

  async edit(body, id, userId) {
    const foundRaid = await dbContext.Raids.findById(id)
    /* @ts-ignore**/
    if (foundRaid.creatorId !== userId) {
      throw new BadRequest('You are not the creator!')
    }
    // findOne
    return await dbContext.Raids.findOneAndUpdate({ _id: id }, { ammoType: body.ammoType, title: body.title, characterType: body.characterType, map: body.map }, { new: true })
  }
}

export const raidsService = new RaidsService()
