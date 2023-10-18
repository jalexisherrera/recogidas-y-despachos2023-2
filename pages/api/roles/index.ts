import { NextApiRequest, NextApiResponse } from "next";

interface NextApiResponse {
    roles: Role[];
    message?: string;
    }
    
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
}