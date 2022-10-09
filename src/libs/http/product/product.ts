import {axios} from 'libs/http/axios';
import {Products} from './product.types';

export const products={
  getProducts:():Promise<{data:Products[]}>=>axios.get('/products'),  
  addProducts:(data:any):Promise<{data:any}>=>axios.post('/products',data),
}
