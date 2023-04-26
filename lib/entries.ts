import { ObjectId, isValidObjectId } from 'mongoose'
import { connect, disconnect } from './conection'
import { Entry } from '@/interfaces'
import EntryModel from '@models/entries'

export const getEntresByUserId = async (
  _id: string | ObjectId
): Promise<Entry[] | null> => {
  if (!isValidObjectId(_id)) {
    return null
  }
  await connect()
  const entries = await EntryModel.find({ user: _id }).lean()
  await disconnect()
  if (!entries) return null
  return JSON.parse(JSON.stringify(entries))
}

export const getEntryById = async (
  _id: string | ObjectId
): Promise<Entry | null> => {
  if (!isValidObjectId(_id)) {
    return null
  }

  await connect()
  const entry = await EntryModel.find({ _id }).lean()
  await disconnect()
  if (!entry) return null
  return JSON.parse(JSON.stringify(entry[0]))
}
