import styled from 'styled-components';

interface IPropsButton{
  radius?:number
  width?:number
}

export const ButtonPrimary= styled.button<IPropsButton>`
  display:flex;
  align-items: center;
  justify-content:center ;
  text-align:center ;
  max-width:${(props)=>props.width +'px'};
  width:100%;
  height:57px;
 
    border-radius:${(props)=>props.radius +'px'};
  color:white;
  background:#3A36DB;
  border:0px ;
  margin-top:26px;
  font-size:16px;
  transition:all 0.4s ease;
  &:hover{
    opacity:0.7;
  }
  cursor:pointer;

  
  
`;