import styled from 'styled-components';

export const TableContainer=styled.div`
  background:#2E2E48;
  border-radius:5px; 
  padding:16px;

`

export const TableWrapper=styled.table`
  width:100%;

  border:1px solid #383856;

`

export const THead=styled.thead`

  height:41px;
  text-align:left ;

  @media screen and (max-width:800px){
    display:none;
  }

`

export const Tbody=styled.tbody`

 @media screen and (max-width:800px){
    
    display:block;
    width:100%;

  }

  
`

export const Tr=styled.tr`
 height:50px;

  @media screen and (max-width:800px){
      border:1px solid #383856;
    padding:16px 0px;
    display:block;
    width:100%;
    height:auto;
    margin-bottom:15px;

  }
 
`


export const Td=styled.td`
  padding:0px 12px;
  color:white;

  @media screen and (max-width:800px){
    
    display:block;
    width:100%;

    margin-bottom:8px;
    text-align:right;
    padding-left:50%;
    text-align:right;
    position:relative;

  &::before{
    content:attr(data-label);
    position:absolute;
    left:0;
    width:50%;
    padding-left:15px;
    font-size:15px;
    font-weight:bold;
    text-align: left;
  }
  

  }
`

export const Th=styled.th`
  padding:0px 14px;
  font-size:16px;
  font-weight:500;
  color:white;
  border-bottom:1px solid #383854;

   @media screen and (max-width:800px){
    
   display:none;

  }

`

