
import { getAllUser } from "../../../server/repositories/user-repository"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/users/getAll:
 *     get:
 *       description: get all users info
 *       responses:
 *         200:
 *           description: The Users Array
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/User'
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       status: 
 *         type: string  
 *       message:
 *         type: string  
 *       data: 
 *         type: array
 *         items:
 *           type: object
 *           properties: 
 *             id:
 *               type: number  
 *             firstName:
 *               type: string  
 *             lastName:
 *               type: string  
 *             age:
 *               type: number     
 */
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    const userList = await getAllUser();
    const response = { ok: true, message: "success", data: userList };
    res.status(200).json(response);
}
