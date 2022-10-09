import styled from 'styled-components';

export const AddCustumerWrapper = styled.div`

  background:white;
  height:100vh;
  width:400px;
  padding:36px 36px;
  padding-bottom:0px;
  svg{
    opacity:0.4;
    cursor:pointer;
    transition:all 0.5s ease;
    &:hover{
      opacity:1;
    }
  }
  position:absolute;
  top:0px;
  right:0px;
`;


export const FormContainer=styled.div`
  text-align:center ;
  img{
    padding:49px 0px;
    cursor:pointer;
    transition:all 0.5s ease;
    &:hover{
      opacity:0.6;

    }
  }
`

export const Title =styled.h2``