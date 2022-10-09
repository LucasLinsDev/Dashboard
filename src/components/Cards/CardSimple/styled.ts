import styled from 'styled-components';

export const CardSimpleWrapper =styled.div`

  height:126px;
  border-radius:5px;
  display:flex;
  gap:16px;
  align-items: center;
  background:#2E2E48;
  padding:24px 16px;
  flex:1;
  img{
    margin-left:auto;
  }
  svg{  margin-left:auto;}
`

export const Title=styled.h1`
  font-size:14px;
  color:white;
  font-weight:400 ;
`

export const Price=styled.p`
  font-size:24px;
  color:white;
  font-weight:bold ;
`

export const TextContent=styled.p`
  font-size:14px;
  color:#D7D7D7;
  font-weight:300 ;
`
export const Img=styled.img``