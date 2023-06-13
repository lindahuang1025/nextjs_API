import { allUsers, saveUser } from "../../database/repositories/user-repository"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/users:
 *     get:
 *       description: get all users info
 *       responses:
 *         '200':
 *           description: user response
 *           schema:
 *             type: array
 *             items:
 *               type: string
 *   /api/users2:
 *     post:
 *       description: add the user info 
 *       responses:
 *         '200':
 *           description: user response
 *           schema:
 *             type: object
 *             items:
 *               type: string          
 */
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    if (req.method === 'POST') {
      await saveUser()
      const response = { message: "post success!" };
      res.status(200).json(response);
    } else {
      const response = await allUsers();
      res.status(200).json(response);
    }
}