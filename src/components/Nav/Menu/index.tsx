import { ReactElement } from "react";
import { MenuWrapper } from "./styles";

interface IPropsMenu{
  children?:ReactElement | ReactElement[]
  bottom?:string
  position?:string
}

const Menu = ({children,bottom,position}:IPropsMenu) =>{
  return(
    <MenuWrapper bottom={bottom} position={position}>
     {children}
    </MenuWrapper>
  )
}

export default Menu;