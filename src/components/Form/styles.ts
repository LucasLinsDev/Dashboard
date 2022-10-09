import styled from 'styled-components';

interface IPropsLable{
  color?:string
}

interface IPropsBoxInput{
  top?:number
  width?:string
}

interface InputPropsBox{
  borderColor?:string
}

interface IPropsTextArea{
  borderRadius?:number
}

export const FormComponent=styled.input`

`

export const BoxInput=styled.div<IPropsBoxInput>`
  display:flex;
  flex-direction:column ;
   position:relative;
  width:${(props)=>props.width};
  a{
    position:relative;
    right:0px;
    color:#3A36DB;
    text-align:right ;
    top:-18px;
    font-size:14px;
    width:80%;
    margin-left:auto;

  }
  span{
    font-size:14px;
    position:relative;
    left:30px;
    width:50%;
  }
    input[type='checkbox']{
      width:16px;
      height:16px;
      top:16px;
      position:absolute
    }

    @media screen and (max-width:800px){
      width:100%;
    }
`

export const Label=styled.label<IPropsLable>`
  padding:8px 0px;
  font-size:14px;
  text-align:left ;
  color:${(props)=>props.color};
`

export const InputBox =styled.input<InputPropsBox>`
  height:50px;
  border-radius:5px;
  padding:16px;
  background: #F1F4FA;
  border:0px;
  margin-bottom:16px;
  position:relative;

  
 
`

export const TextArea=styled.textarea<IPropsTextArea>`
  border-radius:${(props)=>props.borderRadius +'px'};
  width:100%;
  height:250px;
  padding:26px;
`