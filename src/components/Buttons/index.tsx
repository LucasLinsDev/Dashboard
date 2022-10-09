import { ButtonPrimary } from "./styled";
import React from 'react'
interface IPropsButton{
  txtbutton?:string
  radius?:number
  width?:number
  children?:any,
  onClick?:any
}

const Button = ({txtbutton,children,width,radius,onClick}:IPropsButton) => {
  return(
    <ButtonPrimary width={width} onClick={onClick} type={'submit'} radius={radius}>{children}{txtbutton}</ButtonPrimary>
  )
}

export default Button;