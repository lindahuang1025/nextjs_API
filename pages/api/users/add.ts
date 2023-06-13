
import { addUser } from "../../../server/repositories/user-repository"
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from "../../../server/entities/user-entity";

/**
 * @swagger
 * paths:
 *   /api/users/add:
 *     put:
 *       description: add the user info 
 *       parameters: 
 *         - in: query
 *           name: userInfo
 *           content:
 *             application/json: 
 *               schema:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string  
 *                   lastName:
 *                     type: string  
 *                   age:
 *                     type: number  
 *       responses:
 *         200:
 *           description: A User object
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/User'
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       ok: 
 *         type: boolean  
 *       message:
 *         type: string  
 *       data: 
 *         type: object
 *         properties:
 *           id:
 *             type: number  
 *           firstName:
 *             type: string  
 *           lastName:
 *             type: string  
 *           age:
 *             type: number     
 */
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    let data = JSON.parse((req.query.userInfo || "") as string);
    let user = new User();
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.age = data.age;
    await addUser(user)
    const response = { ok: true, message: "success", data: {user} };
    res.status(200).json(response);
}