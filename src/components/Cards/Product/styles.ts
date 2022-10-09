import styled from 'styled-components';

export const ProductCardWrapper=styled.div`
  max-width:301px;
  width:100%;

  background:white;
  flex:1 1 280px;
  padding:20px 16px;
  border:1px solid #E1E3E6;
  border-radius:5px;
  transition:all 0.5s ease;
  border:2px solid #2E2E48;
    
  &:hover{
    border:2px solid #446AF6;
    cursor:pointer;
  }

  @media screen and (max-width:800px){
    max-width:180px;
  }
 @media screen and (max-width:430px){
    max-width:100%;
  }
`

export const Title =styled.h2`
  font-size:16px;
`

export const Subtitle=styled.h3`
  font-size:15px;
  font-weight:400 ;
`

export const SalerOption=styled.p`
  padding:8px;
  border-radius:5px;
  background:#EBF8F6;
  color:#0DA389;
 
`

export const ProductImage=styled.div`
  width:100%;
  padding:16px 0px;
  text-align:center ;
  img{
    width:90%;
  }
`

export const ButtonAddToCard=styled.button`
  max-width:100%;
  width:100%;
  height:48px;
  border-radius:5px;
  background:#446AF6;
  border:0px;
  color:white;
  font-size:16px;
  margin:16px 0px;
  display:flex;
  align-items:center;
  justify-content:center ;
  gap:8px;
  transition:all 0.4s ease;
  cursor:pointer;
  &:hover{
    opacity:0.6;
  }
`