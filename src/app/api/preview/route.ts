import type {NextApiRequest, NextApiResponse} from 'next'

export default function POST(req: NextApiRequest, res: NextApiResponse): void {
//   let token
//   if (req.query.token) {
//     // eslint-disable-next-line no-process-env
//     token = process.env.SANITY_API_READ_TOKEN
//     if (!token) {
      throw new TypeError(`Missing SANITY_API_READ_TOKEN`)
//     }
//   }

//   res.setPreviewData({token})
//   res.redirect(307,"/")
//   res.end()
}
