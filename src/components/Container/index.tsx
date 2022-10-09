import { ReactElement } from "react";
import { ContainerWrapper } from "./styles";

interface IPropsContainer{
  children?:ReactElement | ReactElement[]
  display?:'flex' | 'inline' | 'block' | 'grid' | 'inline-block'
  gap?:number
  responsive:boolean
  flex?:'column' | 'row' 
  paddingTop?:number
}

const Container = ({children,display,gap,paddingTop,responsive,flex}:IPropsContainer) =>{
console.log(responsive);
  return(
    <ContainerWrapper paddingTop={paddingTop} display={display} gap={gap} responsive={responsive} flex={flex}>
        {children}
    </ContainerWrapper>
  )
}

export default Container;