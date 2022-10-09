import {axios} from 'libs/http/axios';

export const loginuser={
  loginUser:(data:{}):Promise<{data:any}>=>axios.post('/users/login',data,{
    headers: {
    'Content-Type': 'application/json'
    }
  }),
}