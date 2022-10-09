import {axios} from 'libs/http/axios';
import {Users} from './user.types';


export const users={
  getUser:(id: string):Promise<{data:Users}>=>axios.get(`/users/${id}`),
  getUsers:():Promise<{data:Users[]}>=>axios.get('/users'),
  addUser:(data={}):Promise<{data:Users}>=>axios.post('/users',data),
  editUser:(data={}):Promise<{data:Users}>=>axios.put('/users',data),
}