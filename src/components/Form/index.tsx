import { BoxInput, FormComponent, InputBox, Label, TextArea } from "./styles";
import {ErrorMessage, useFormik} from 'formik';
import { SeePassword } from "pages/Login/styles";
import { HiEye, HiEyeOff } from "react-icons/hi";
import React,{useState} from 'react';
interface IPropsForm{
  text?:string
  type?:"text" | "email" | "number" | 'password' | 'checkbox' | 'textarea' | 'file' | 'date'  | 'color'
  label?:string
  placeholder?:string
  color?:string
  top?:number
  width?:string
  name?:string
  onChange?:any
  multiple?:any
  value?:string,
  defaultValue?:string
  borderColor?:string,
}


const Input = ({text,type,multiple,name='default', borderColor ,placeholder,width,label,color,top,onChange,value,defaultValue}:IPropsForm) =>{
    const [show,setShow]=useState(false);


                                                                                   
    if(type=='password'){
      return(
      <BoxInput top={top} width={width}>
        <Label color={color} >{label}</Label>
     
        <InputBox  name={name} type={show ? 'text' : type} value={value} defaultValue={defaultValue} placeholder={placeholder} multiple  borderColor={borderColor} onChange={onChange}/>
        <SeePassword>
                     {show ?   <HiEye size={20} onClick={()=>setShow(!show)} /> :  <HiEyeOff  onClick={()=>setShow(!show)} size={20}   />   }
        </SeePassword>   
     
        <ErrorMessage component='div' name={name} className='error' />
      </BoxInput>
  
  )
    }


     return(
      <BoxInput top={top} width={width}>
        <Label color={color} >{label}</Label>
     
        {type==='checkbox' ? <> <span>Remember me</span>    <a>Reset Password?</a></> : '' }
        {type==='textarea' ? <TextArea></TextArea> :     
        <InputBox  name={name} type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} multiple onChange={onChange}/>}
     
     
        <ErrorMessage component='div' name={name} className='error' />
      </BoxInput>
  
  )


}

export default Input;