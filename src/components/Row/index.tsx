import {ReactElement} from 'react';
import { RowWrapper } from "./styles";

interface IPropsRow{
 children?:ReactElement | ReactElement[] | any
 display?:'flex' | 'inline' | 'block' | 'inline-block' 
 gap?:number
 paddingTop?:number
 justifyContent?:string
 align?:string
 flex_wrap?:string
 marginTop?:number
 responsive?:boolean
}

const Row = ({children,marginTop,responsive,flex_wrap,display,gap,align,paddingTop,justifyContent}:IPropsRow) =>{
  console.log('responseive');
  return(
    <RowWrapper  responsive={responsive} marginTop={marginTop} flex_wrap={flex_wrap} display={display} align={align} justifyContent={justifyContent} paddingTop={paddingTop} gap={gap}>
      {children}
    </RowWrapper>
  )
}

export default Row;