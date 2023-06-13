
import { getAllUser } from "../../../server/repositories/user-repository"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/users/getAll:
 *     get:
 *       description: get all users info
 *       responses:
 *         '200':
 *           description: user response
 *           schema:
 *             type: array
 *             items:
 *               type: string       
 */
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    const response = await getAllUser();
    res.status(200).json(response);
}
