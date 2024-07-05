import type { NextApiRequest, NextApiResponse } from 'next'


  
type ResponseData = {
  message: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) 


{
  const data = req.body
  const id = await (data)
  res.status(200).json({ message : "Name" })
}