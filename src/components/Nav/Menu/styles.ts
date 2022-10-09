import styled from 'styled-components';

interface IPropsWrapper{
  bottom?:string
  position?:string
}


export const MenuWrapper=styled.div<IPropsWrapper>`
  max-width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
  gap:12px;
  position:${(props)=>props.position};
  
  bottom:${(props)=>props.bottom};

`