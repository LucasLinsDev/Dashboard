import React from 'react';
import {Link} from 'react-router-dom';
import { BoxIcone, Icone,  MenuItemText, MenuItemWrapper } from "./styles";

import { FiChevronRight } from "react-icons/fi";
interface IPropsMenuItem{
  icone?:any
  txt?:string
  alt?:string
  arrow?:boolean
  url?:string
  background?:string
}

const MenuItem = ({icone,txt,alt,arrow,url='/',background}:IPropsMenuItem) =>{
  return (
    <Link to={url}>
   
      <MenuItemWrapper background={background}>
        <BoxIcone>
          {icone}
        </BoxIcone>
        <MenuItemText>{txt}</MenuItemText>
       {arrow ? <Icone> <FiChevronRight/> </Icone> :'' }
      </MenuItemWrapper>
      </Link>
  )
}

export default MenuItem;