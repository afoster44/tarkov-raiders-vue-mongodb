import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import RaidSchema from '../models/Raid'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Raids = mongoose.model('Raid', RaidSchema);
}

export const dbContext = new DbContext()
