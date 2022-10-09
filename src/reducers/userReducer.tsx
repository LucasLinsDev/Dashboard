
import Cookies from 'js-cookie';


export function userReducer(state:any ,action:any){
const cookieUser=Cookies.get('user');

const statedefault=cookieUser ? JSON.parse(cookieUser) : null
state=statedefault;

  switch(action.type){
    case 'LOGIN':
      return action.payload
      default:
        return state;
  }
}