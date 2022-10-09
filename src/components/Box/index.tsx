import {ReactElement} from 'react';
import { BoxWrapper } from "./styles";

interface IPropsBox{
 children?:ReactElement | ReactElement[] | any
 display?:string
 align?:string
 gap?:string
 text_align?:string
 direction?:string
 width?:number
 flex?:number
 overflow?:string
justify?:string
bg?:string
radius?:number
padding?:number
}

const Box= ({justify,padding,children,bg,radius,overflow,display,align,gap,width,text_align,direction,flex}:IPropsBox) =>{
  return (
    <BoxWrapper padding={padding} bg={bg} radius={radius} justify={justify} overflow={overflow} display={display} width={width} flex={flex} gap={gap} align={align} direction={direction} text_align={text_align}>
        {children}
    </BoxWrapper>
  )
}

export default Box;