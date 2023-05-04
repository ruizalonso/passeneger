import { ObjectId, isValidObjectId } from 'mongoose'
import CryptoJS from 'crypto-js'
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

export const encryptValue = async (value: string, key: string) => {
  try {
    if (value && key) {
      return await CryptoJS.AES.encrypt(value, key).toString()
    }
  } catch (error) {
    return error
  }
}

export const decryptValue = async (value: string, key: string) => {
  try {
    if (value && key) {
      return await CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8)
    }
  } catch (error) {
    return error
  }
}
