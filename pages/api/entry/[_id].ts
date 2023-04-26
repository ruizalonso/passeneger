import { connect } from '@lib/conection'
import EntryModel from '@/models/entries'
import { NextApiRequest, NextApiResponse } from 'next'
// import { withApiAuthRequired } from '@auth0/nextjs-auth0'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { _id },
  } = req

  await connect()

  switch (method) {
    case 'GET':
      try {
        const entries = await EntryModel.findById(_id).lean()
        if (!entries) {
          return res.status(404).json({ success: false })
        }
        res.status(200).json({ success: true, data: entries })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    case 'PUT':
      try {
        const entries = await EntryModel.findByIdAndUpdate(_id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!entries) {
          return res.status(404).json({ success: false })
        }
        res.status(201).json({ success: true, data: entries })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    case 'DELETE':
      try {
        const entries = await EntryModel.findByIdAndDelete(_id)
        if (!entries) {
          return res.status(404).json({ success: false })
        }
        res.status(201).json({ success: true, data: entries })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false, data: null })
      break
  }
}

export default handler
// export default withApiAuthRequired(handler)
