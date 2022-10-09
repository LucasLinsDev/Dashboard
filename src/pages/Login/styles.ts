import styled from "styled-components";

export const LoginWrapper = styled.div`
 width:100% ;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center ;
  background:#06090F;
`

export const FormContent=styled.div`
 max-width:506px;
  width:100%;
  background:#1F2028;
  padding:56px 26px;
  border-radius:8px;
  border:1px solid #151B26;

  position:relative;
  h1{
    padding:16px 0px;
    color:white;
  }
 

  @media screen and (max-width:800px){
    margin:0 26px;
  }
  
`

export const SeePassword=styled.div`
  position:relative;
  right:0px;
  width:100%;
  
  cursor:pointer;
  
 
  svg{
    right:16px;
    top:-50px;
     z-index:3 ;
    position:absolute ;
  }
`