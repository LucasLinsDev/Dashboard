import {useSelector} from 'react-redux';
import Login from 'pages/Login';
import { Outlet } from 'react-router-dom';

export default function LoggedInRoute(){
  const {user} =useSelector((state)=>({...state}));

  return user ? <Outlet/> : <Login/>;
}