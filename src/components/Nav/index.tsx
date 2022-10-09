
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { NavWrapper } from "./styles";
import { FiSearch } from "react-icons/fi";
import { HiOutlineArchive,HiLogout,HiOutlineUser,HiOutlineDocument,HiOutlineCalendar,HiOutlineChat, HiPhotograph, HiUsers, HiOutlineClipboardList } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import Avatar from "./Avatar";
import avatar_icone from '../../assets/icones/avatar.png'

import {useLocation,useNavigate} from 'react-router-dom';

const Nav = ()=>{

  const location=useLocation();

  function pathMathRouter(route:string):void | Boolean | string{
    if(route===location.pathname){
      return true
    }
    
//    console.log(location);
  }

  return(
    <NavWrapper>
      <Menu>
        <Avatar src={avatar_icone}/>
         
        <MenuItem txt='Dashboard' arrow={false}  background={`${pathMathRouter('/') && "blue" }`}  url='/' icone={<MdSpaceDashboard size={24}/>} />
        {/** 
        <MenuItem txt='Search' arrow={false} icone={<FiSearch size={24}/>} />
             */}
        <MenuItem txt='Profile'  background={`${pathMathRouter('/profile') && "blue" }`}   url='/profile' arrow={true} icone={<HiOutlineUser size={24}/>}/>
        <MenuItem txt='Users'  url='/users' background={`${pathMathRouter('/users') && "blue" }`}   arrow={true} icone={<HiUsers size={24}/>}/>
        
        <MenuItem txt='Products'  url='/products' background={`${pathMathRouter('/products') && "blue" }`}   arrow={true} icone={<HiOutlineArchive size={24}/>}/>
        <MenuItem txt='Blog'  url='/post' arrow={true} background={`${pathMathRouter('/post') && "blue" }`}    icone={<HiOutlineClipboardList size={24}/>}/>
        {/** 
        <MenuItem txt='Pages' url='/pages' arrow={true} icone={<HiOutlineDocument size={24}/>}/>
        */}
        <MenuItem txt='Pages' url='/editor' arrow={true} background={`${pathMathRouter('/editor') && "blue" }`}   icone={<HiPhotograph size={24}/>}/>
       
        
    
      </Menu>
      <Menu>
        <MenuItem txt='Support' arrow={false} icone={<HiOutlineChat size={24}/>}/>
        <MenuItem txt='Sign Out' arrow={false} icone={<HiLogout size={24}/>}/>
      </Menu>
    </NavWrapper>
  )
}

export default Nav;