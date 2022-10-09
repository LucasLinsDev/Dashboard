import React from "react"
import { ButtonIconWrapper, Icone } from "./styles"

interface IPropsButtonIcon{
  txt?:string
  icone?:any
}

const ButtonIcon = ({txt,icone}:IPropsButtonIcon) =>{
  return(
    <React.Fragment>
      <ButtonIconWrapper>
        <Icone>{icone}</Icone>
        {txt}
      </ButtonIconWrapper>
    </React.Fragment>
  )
}

export default ButtonIcon