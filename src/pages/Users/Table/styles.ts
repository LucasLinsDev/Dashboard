import styled from 'styled-components';


export const Table=styled.table`
  width:100%;
  height:300px;
    //border-collapse: collapse;
   border-spacing: 0 1em;


  margin:38px 0px;
  border-radius:5px;

  @media screen and (max-width:800px){
    display:block;
    width:100%;
  }

`

export const Thead=styled.thead`
  width:100%;
   @media screen and (max-width:800px){
    display:block;
    width:100%;
    display:none;
  }
`

export const Tr=styled.tr`

  height:80px;
  margin-bottom:20px;
  border-radius:5px ;
  
  @media screen and (max-width:800px){
    display:block;
    width:100%;
    height:auto;
  }

`

export const Th=styled.th`
  text-align:left ;
  font-size:14px;
  font-weight:300 ;
  color:white;

  @media screen and (max-width:800px){
     padding:12px 15px;
     display:block;
     width:100%;
  }
  
`


export const TBody=styled.tbody`
  tr{
    margin-bottom:26px !important;
   
    border-radius:5px;
    background-color:#2E2E48 ;
          td:first-child {
        border-left-style: solid;
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
    }
    td:last-child {
        border-right-style: solid;
        border-bottom-right-radius: 10px; 
        border-top-right-radius: 10px; 
    }
  }


  @media screen and (max-width:800px){
    display:block;
    width:100%;
  }

`

export const Td=styled.td`

  
   
    margin:0px;
    padding:0px;
    padding:0px 16px;
    border:0px solid white;
    color:white;
    padding:12px 15px;
    @media screen and (max-width:800px){
    display:block;
    width:100%;

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

    > div{
     
      text-align: right ;
      justify-content:flex-end ;
      align-items: center;
    }
  }
    
`


export const Button=styled.button`
  width:150px;
  border-radius:5px;
  background:black;
  color:white;
  font-size:14px;
  height:47px;
  padding:12px 28px;
  background-color:#2E2E48 ;
  color:white;
  transition:all 0.5s ease;
  cursor:pointer;
  border:0px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover{

      opacity:0.7;
    
    }

`