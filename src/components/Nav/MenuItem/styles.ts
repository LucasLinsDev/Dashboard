import styled from "styled-components";
interface MenuItemProps{
  background?:string;
}
export const MenuItemWrapper=styled.div<MenuItemProps>`

  background:${(props)=>props.background};
  display:flex;
  align-items:center;
  gap:16px;
  max-width:318px;
  width:100%;
  height:48px;
  cursor:pointer;
  transition:all 0.4s ease;
  &:hover{
    opacity:0.9;
    background:blue;
    border-radius:8px;
  }
  


`


export const BoxIcone=styled.div`
  padding:12px;
  display:flex;
  align-items:center ;
  justify-content:center ;
`

export const Icone =styled.div`
  margin-left:auto;
  padding:12px;


  @media screen and (max-width:1040px){
    display:none;
  }

`

export const MenuItemText=styled.p`

  @media screen and (max-width:1040px){
    display:none;
  }
  `
