import { NextApiRequest, NextApiResponse } from 'next';

export  async function GET(req: NextApiRequest, res: NextApiResponse) {
   res.clearPreviewData();
   res.writeHead(307, { Location: '/' });
   res.end();
}
