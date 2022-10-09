import styled from 'styled-components';


interface IPropsRow{
  display?:string
  gap?:number
  paddingTop?:number
  justifyContent?:string
  align?:string
  flex_wrap?:string
  marginTop?:number
  responsive?:boolean
}

export const RowWrapper=styled.div<IPropsRow>`

  display:${(props)=>props.display};
  gap:${(props)=>props.gap +'px'};
  padding:${(props)=>props.paddingTop} 0px;
  justify-content:${(props)=>props.justifyContent};
  align-items:${(props)=>props.align};
  flex-wrap:${(props)=>props.flex_wrap};
  width:100%;
  margin-top:${(props)=>props.marginTop+'px'};

  ${props=>props.responsive == true &&  `

    @media screen and (max-width:900px){
      flex-direction:column;
      
    }

  `}
`