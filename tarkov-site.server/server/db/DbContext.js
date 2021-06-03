import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import RaidSchema from '../models/Raid'
import GoalSchema from '../models/Goal'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Raids = mongoose.model('Raid', RaidSchema);
  Goals = mongoose.model('Goal', GoalSchema);
}

export const dbContext = new DbContext()
