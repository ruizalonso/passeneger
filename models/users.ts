import mongoose, { Schema, model, Model } from 'mongoose'
import { User } from '@/interfaces'

const UserSchema = new Schema<User>(
  {
    name: {
      required: [true, 'Please write your name'],
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const UserModel: Model<User> =
  mongoose.models.users || model('users', UserSchema)
export default UserModel
