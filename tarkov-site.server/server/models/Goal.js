import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Goal = new Schema(
  {
    title: { type: String, required: true },
    raidId: { type: String, ref: 'Raid', required: true },
    creatorId: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Goal.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Goal
