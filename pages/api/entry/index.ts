import { connect } from '@lib/conection'
import EntryModel from '@/models/entries'
import { NextApiRequest, NextApiResponse } from 'next'
// import { withApiAuthRequired } from '@auth0/nextjs-auth0'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req

  await connect()

  switch (method) {
    case 'GET':
      try {
        const entries = await EntryModel.find({})
        console.log(entries)

        res.status(200).json({ success: true, data: entries })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    case 'POST':
      try {
        const entries = new EntryModel(req.body)
        await entries.save()

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