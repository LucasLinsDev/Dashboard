import styled from 'styled-components';

interface IPropsLabel{
  color?:string
}

export const SelectInput =styled.select`
  height:50px;
  background:#F1F4FA;
  border:0px;
  padding:16px;
  position:relative;
  
  &::after{
    content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
  }
`

export const Option =styled.option`

`

export const SelectForm=styled.div`
  display:flex;
  flex-direction:column ;
  text-align:left ;
 


`


export const Label =styled.label<IPropsLabel>`
  padding:8px 0px;
  color:${(props)=>props.color}
`