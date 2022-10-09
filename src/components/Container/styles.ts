import styled from 'styled-components';

interface IPropsContainer{
  display?:'flex' | 'grid' | 'block' | 'inline' | 'inline-block'
  gap?:number
  responsive?:boolean
  flex?:'column' | 'row'
  paddingTop?:number
}

export const ContainerWrapper=styled.div<IPropsContainer>`
  padding:28px 24px;
  padding-top:${(props)=>props.paddingTop};
  display:${(props)=>props.display};
  gap:${(props)=>props.gap + 'px'} ;
  max-width:100%;
  width:100%;
  flex-direction:${(props)=>props.flex} ;

  ${props=>props.responsive === true && `

    @media screen and (max-width:800px){
      flex-direction:column;
    }

  `}
 

`