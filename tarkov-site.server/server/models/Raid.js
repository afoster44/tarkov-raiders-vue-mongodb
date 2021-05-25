import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Raid = new Schema(
  {
    title: { type: String, required: true },
    map: { type: String, required: true },
    characterType: { type: String, required: true },
    ammoType: { type: String, required: true },
    extracted: { type: Boolean, default: false, required: true },
    creatorId: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Raid.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Raid
