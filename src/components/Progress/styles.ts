import styled from "styled-components";


export const ProgressWrapper=styled.div`
  width:100%;
  background:#2E2E48;
  padding:16px;
  border-radius:5px;
`

export const Title =styled.h2`
color:white;
  font-size:18px;
  margin-bottom:16px;
`

export const ProgressItem=styled.div`
  display:flex;
  gap:16px;
  flex-direction:column ;

`

export const Span =styled.span``

export const ProgresItemContent=styled.div`
  display:flex;
  justify-content:space-between ;
  span{
   color:white; 
   font-size:14px;
  }
  width:100%;
`


export const Progress=styled.progress`
width:100%;
`