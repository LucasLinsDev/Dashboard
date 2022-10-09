import React from "react"
import { StringDecoder } from "string_decoder"
import { FormControl, Option,SelectInput,Label,Icone, Input, PageLink, Span, TextAreaWrapper } from "./styles"

interface IPropsForm{
  icone?:any
  type?:"text"| "number" | "email" | "password" 
  placeholder?:string
}

const Form = ({icone,type="text",placeholder='default'}:IPropsForm)=>{
  return (
    <React.Fragment>
        <FormControl>
          <Icone>
            {icone}
          </Icone>
          <Input type={type} placeholder={placeholder} />
        </FormControl>
    </React.Fragment>
  )
}

interface IPropsCheckbox{
  span?:string
  label?:string
}

const InputCheckbox=({span,label}:IPropsCheckbox)=>{
    return(
      <React.Fragment>
        <FormControl>
          <Label>{label}</Label>
          <Input type='checkbox' />
          <Span>{span}</Span>
          <PageLink>Esqueceu a senha?</PageLink>
        </FormControl>
      </React.Fragment>
    )
}


interface IPropsText{
  placeholder?:string
  label?:string
}


const TextArea=({placeholder,label}:IPropsText)=>{
  return(
    <React.Fragment>
      <Label>{label}</Label>
      <TextAreaWrapper placeholder="">

      </TextAreaWrapper>
    </React.Fragment>
  )
}

interface IPropsSelect{
  label?:string
}


const Select = ({label}:IPropsSelect)=>{
  return(
    <React.Fragment>
       <FormControl>
        <Label>{label}</Label>
         <SelectInput name=''>
          <Option value=''>Conteudo</Option>
          </SelectInput>
       </FormControl>
    </React.Fragment>
  )
}




export default {Form,InputCheckbox,TextArea,Select};