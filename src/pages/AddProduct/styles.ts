import styled from 'styled-components';

export const AddProductWrapper=styled.div`
  background-color:#383854 ;
  width:100%;
  display:flex;
  gap:36px;



`

export const PageHeader=styled.div`
  margin-top:36px;
  margin-bottom:16px;
  display:flex;
  justify-content: space-between;
  align-items:center;
  color:white;
  svg{
    color:red;
    opacity:0.7;
    width:36px;
    height:36px;
    cursor:pointer;
    display:none;
  }
  @media screen and (max-width:520px){
    h1{
      font-size:18px;
    }
  }
`


export const ProductImages = styled.div`
  width:100%;
  
`

export const ProductHeader =styled.div`

  display:flex;
  gap:16px;
  align-items:center ;
  justify-content:space-between ;
  width:100%;
  margin-top:16px;
 

`
export const Title=styled.h2`
  color:white;
  font-weight:400;

  @media screen and (max-width:520px){
    font-size:14px;
  }
`

export const ProductBox=styled.div`
  width:100%;
  height:190px;
  background:white;
  margin:36px 0px;
  border-radius:5px;
  border:1px dashed #F2F2F2;
  background-color:#F8F8F8 ;
  display:flex;
  align-items:center ;
  gap:20px;
  padding:16px;

  @media screen and (max-width:520px){
    flex-direction:column ;
     height:auto;
  }

`

export const ProductItem=styled.div`
    position:relative;
    img{
      width:100%;
      height:auto;
      border-radius:12px;
      transition:all 0.4s ease;
       cursor: pointer;
     border:2px solid white;
     &:hover{
      border:2px solid blue;
     }
    }

    svg{
      cursor: pointer;
      position:absolute;
      background:white;
      top:-8px;
      right:-8px;
          transition:all 0.4s ease;
      &:hover{
        opacity:0.7;
      }
    }

    width:105px;
    height:108px;
    border-radius:12px;
  
`

export const BoxIcone=styled.div`
  background:white;
  width:36px;
  height:36px;
  border-radius:100%;
  display:flex;
  align-items:center ;
  justify-content:center ;
`

export const ProductAddImage=styled.div`
  cursor:pointer;
  max-width:140px;
  text-align:center ;
  height:108px;
  padding:16px;
  display:flex;
  gap:8px;
  align-items:center ;
  justify-content:center;
  flex-direction:column ;
    p{
      font-size:12px;
      opacity:0.7;
    }
    border:1px dashed silver;
    border-radius:12px;
    margin-left: auto;


    @media screen and (max-width:520px){
      margin:0 auto;
    }
`

export const ProductAvailability=styled.div`
width:100%;
height:96px;
background:#F8F8F8;
border-radius:5px;
margin:16px 0px;
`

export const BoxColors=styled.div`
width:100%;
height:116px;
background:#F8F8F8;
border-radius:5px;
margin:16px 0px;
`