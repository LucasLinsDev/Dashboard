import React,{useState,useRef} from 'react';
import Input from "components/Form";
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import Row from "components/Row";
import { HiXCircle } from "react-icons/hi";
import { AddCustumerWrapper, FormContainer, Title } from "./styles";
import picture from '../../assets/products/picture.svg'
import Button from "components/Buttons";
import Select from "components/Select";
import { users } from 'libs/http/user/user';
import { userValidation } from 'libs/validation/users';
import { Circles } from 'react-loader-spinner';
import { userInfo } from 'os';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
interface AddCustomerProps{
  setShow?:any,
  show?:boolean
}

const UserInfos={

  name:"",
  image:'',
  lastname:"",
  email:"",
  phone:"",
  gender:"",
  password:""
}

const AddCustumer = ({setShow,show}:AddCustomerProps) =>{
const notify = () => toast("User create success");
  const refInput:any=useRef<HTMLInputElement | null>();
  const [user,setUser]=useState(UserInfos);
  const [loading,setLoading]=useState(false);
  const [pictureImage,setPicture]=useState(picture);

  function onChange(e:any){
    setUser((prevState)=>({
      ...prevState,
      [e.target.name]: (e.target.value ?  e.target.value : e.target.files[0] )
    }))
   
  }

  function handleImage(e:any){
   const imagenew= URL.createObjectURL(e.target.files[0])
   console.log(imagenew);
   setPicture(imagenew);
       setUser((prevState)=>({
      ...prevState,
      [e.target.name]:  e.target.files[0]
    }))
   
  }

  const addUser =async() => {
    console.log(user)
    setLoading(true);
    
    try{
         const data=new FormData();
         data.append('name',user.name);
         data.append('email',user.email);
         data.append('phone',user.phone);
         data.append('password',user.password);
         data.append('image',user.image);
     
         await users.addUser(data); 
         
         notify();

    }catch(error:any){
      console.log(error.message);
    }

    setLoading(false);

    };


  return(
    <AddCustumerWrapper>
        <ToastContainer />
        <Row display='flex' justifyContent="space-between" align='center'>
            <Title>Add Customer</Title>
            <HiXCircle size={36} color='red' onClick={()=>setShow(!show)}/>
        </Row>
      <FormContainer>
        <Formik
          enableReinitialize
          initialValues={user}
          validationSchema={userValidation}
          onSubmit={()=>addUser()}>
              {
                (formik)=>(
                    <Form method='post' form-enctype='multipart/form-data'>
                    <img src={pictureImage} onClick={()=> refInput.current.click()} className='avatar-users'/>
                    <input type='file' ref={refInput} hidden onChange={handleImage} name='image'  id='image' />
                    <Input  name="name" placeholder="John" onChange={onChange} />
                    <Input label='Email' name="email" placeholder="Example@gmail.com" onChange={onChange}  />
                    <Input label='Phone Number' name="phone" placeholder="33757005467" onChange={onChange}  />
                    <Input label='Password' type='password' name="password" placeholder="33757005467" onChange={onChange}   />
                 
                    <Button>
                  {loading ? 
                    (  <Circles
                        height="20"
                        width="20"
                      
                        color="white"
                        ariaLabel="loading"

                      />  ) :' Submit'
                }

                    </Button>
                  </Form>
                )
              }
          </Formik>
       
    
      </FormContainer>
    </AddCustumerWrapper>
  )
}

export default AddCustumer;