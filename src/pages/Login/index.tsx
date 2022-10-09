import React,{useState} from 'react';
import Button from "components/Buttons";
import Input from "components/Form";
import { FormContent, LoginWrapper, SeePassword } from "./styles";
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { Form, Formik } from 'formik';
import Row from 'components/Row';
import { axios } from 'libs/http/axios';
import { loginuser } from 'libs/http/login/login';
import { useDispatch } from 'react-redux';

import { HiEye, HiEyeOff } from 'react-icons/hi';
const loginInfos={
  email:'',
  password:'',
}

const Login = () =>{

  const navigate=useNavigate();

  const [login,setLogin]=useState(loginInfos);
  const {email,password}=login;
  const dispatch=useDispatch();
  const handleLoginChange=(e:any)=>{
    const {name,value}=e.target;
    setLogin({...login,[name]:value})
  }

  const loginValidation=Yup.object({
    email:Yup.string().required('Email address is required')
    .email('Must be a valid email')
    .max(100),
    password:Yup.string().required('Password is required').min(4),

  })

  const [error,setError] = useState<unknown>('you have an error');
  const [success,setSuccess] = useState('');
  const [loading,setLoading] = useState(false);
  const [show,setShow]=useState(false);
  const loginSubmit = () => {
    
    try{
      setLoading(true);

      const data= loginuser.loginUser({email,password});
   
        data.then((response)=>{
          const json=JSON.stringify(response.data);
          console.log(json);
          dispatch({type:'LOGIN',payload:json})
          Cookies.set('user',json)      
        })

       navigate('/');
    }catch(error:any){

      setLoading(false);
      console.log(error);
      setError(error.message);

    }



  }

  return(
    <LoginWrapper>
      <FormContent>
      <Formik
        enableReinitialize
        initialValues={{
          email,
          password,
        }}
        validationSchema={loginValidation}
        onSubmit={()=>{ loginSubmit() }}

      >
          {
            ({errors})=>(
                <Form>
                    <Input label={'Email'} borderColor={errors.email ? "" : "red"} type='email' placeholder={'email@email.com'} onChange={handleLoginChange} name='email' color='white'/>
                  
                    <Input label={'Password'}  type={show ? 'text' : 'password'} color='white' onChange={handleLoginChange} name='password' placeholder="*****"/>
                 
                    <Button txtbutton="Sign in"/>    
             
                </Form>
            )
          }
        
          
      </Formik> 
       <Row>
       
       </Row>
      </FormContent>
    </LoginWrapper>
  )
}

export default Login;