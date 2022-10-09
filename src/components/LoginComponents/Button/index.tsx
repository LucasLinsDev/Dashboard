import React from "react"
import { ButtonWrapper } from "./styles";

interface IPropsButton{
  txt?:string
}


const Button = ({txt='default'}) =>{
  return(
    <React.Fragment>
        <ButtonWrapper>
    	  {txt}
        </ButtonWrapper>
    </React.Fragment>
  )
  
}

export default {Button};