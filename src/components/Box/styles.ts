import styled from 'styled-components';

interface IPropsBox{
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

export const BoxWrapper =styled.div<IPropsBox>`
  display:${(props)=>props.display};
  align-items:${(props)=>props.align};
  gap:${(props)=>props.gap};
  text-align:${(props)=>props.text_align};
  flex-direction:${(props)=>props.direction};
  max-width:${(props)=>props.width +'px'};
  width:100%;
  flex:${(props)=>props.flex};
  overflow:${(props)=>props.overflow};
  justify-content:${(props)=>props.justify};
  background-color:${(props)=>props.bg};
  border-radius:${(props)=>props.radius +'px'};
  padding:${(props)=>props.padding+'px'};
`