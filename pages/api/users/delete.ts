
import { deleteUserById } from "../../../server/repositories/user-repository"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/users/delete:
 *     delete:
 *       description: delete user by id 
 *       parameters: 
 *         - in: query
 *           name: id
 *           description: user id
 *           required: true
 *           type: integer
 *           format: int32
 *       responses:
 *         '200':
 *           description: user response
 *           schema:
 *             $ref: '#/definitions/User'
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: The user ID.
 *       username:
 *         type: string
 *         description: The user name.        
 */
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    let id = Number(req.query.id || 0);
    await deleteUserById(id)
    const response = { message: "post success!" };
    res.status(200).json(response);
}