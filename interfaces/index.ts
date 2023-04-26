import { ObjectId } from 'mongoose'

export interface Entry {
  _id: string
  user: ObjectId | string
  entryName: string
  entryDescription: string
  entryValue: string
}

export interface User {
  name: string
  email: string
  status: boolean
}
