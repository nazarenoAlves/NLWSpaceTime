import { cookies } from 'next/headers'
import { IUser } from '../interfaces/IUser'
import jwtDecode from 'jwt-decode'

export function getUser(): IUser {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('unauthenticated')
  }

  const user: IUser = jwtDecode(token)

  return user
}
