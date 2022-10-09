import { SelectForm,Option, SelectInput, Label } from "./styles";

interface IPropsSelect{
  name?:string
  txt?:string
  color?:string
  label?:string
}

const Select = ({name,txt='Male',color,label='default'}:IPropsSelect) =>{
  return(
    <SelectForm>
      <Label color={color}>{label}</Label>
      <SelectInput name={name}>
        <Option value=''>{txt}</Option>
      </SelectInput>
    </SelectForm>
  )
}


export default Select;