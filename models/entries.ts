import mongoose, { Schema, Types, model, Model } from 'mongoose'
import { Entry } from '@/interfaces'

const EntrySchema = new Schema<Entry>(
  {
    user: {
      type: Types.ObjectId,
      ref: 'user',
    },
    entryName: {
      type: String,
      required: [true, 'Please write a name for this value'],
    },
    entryDescription: {
      type: String,
    },
    entryValue: {
      type: String,
      required: [true, 'Please type the value'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const EntryModel: Model<Entry> =
  mongoose.models.entries || model('entries', EntrySchema)
export default EntryModel
