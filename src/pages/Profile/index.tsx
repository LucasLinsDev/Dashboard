import Box from "components/Box";
import Container from "components/Container";
import Input from "components/Form";
import Nav from "components/Nav";
import Row from "components/Row";
import { ProfileImage, ProfileWrapper,Title } from "./styles";
import picture from '../../assets/icones/avatar.png'
import Select from "components/Select";
import Button from "components/Buttons";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { users } from "libs/http/user/user";
import { useEffect, useState } from "react";
import { Users } from "libs/http/user/user.types";
import * as Yup from 'yup'
import { Formik,Form } from "formik";
import { profileValidation } from "libs/validation/users";

const infoUser={
  name:'',
  email:'',
  password:'',
  gender:'',
  confirmPassword:'',
  newPassword:'',
  picture:'',
  image:File,
}

const Profile = () =>{

  const {user} =useSelector((state:any)=>({...state}))
  const [userContent,setUserContent]=useState(infoUser);
  const [picture,setPicture]=useState<any>();
  const id:any=Cookies.get('user');
  useEffect(()=>{

    const getProfile = async () => {

      try{
        
        if(user.id){
         
          const res= await users.getUser(user.id);
        }
        
      


    
      }catch(error:any){

        console.log(error.message);

      }

    }

    getProfile();
  
  },[])

  const onChange=(e:any)=>{
    setUserContent((prevState:any)=>(
      {
        ...prevState,
        [e.target.name]:e.target.value
      }
    ))

    console.log(userContent);

  }

  const userUpdate = async () =>{

    try{


       const data=new FormData();

        data.append('name',userContent.name)
        data.append('email',userContent.email)
        data.append('password',userContent.password)
        data.append('confirmPassword',userContent.confirmPassword)
        data.append('newPassword',userContent.newPassword)
        data.append('id',user.id);
        data.append('image',picture);
  
    const res=  await users.editUser(data);
 

    }catch(error){
      console.log(error);
    }

  }

  const onChangeFile = (e:any) => {
      setPicture(e.target.files[0])
      console.log(picture);
  }



  return(
    <ProfileWrapper>
        <Nav/>
        <Container responsive={false} >
          <Row>
              <Title size={26} color='white'>Profile</Title>
          </Row>
         <Formik
            enableReinitialize
            initialValues={
              infoUser
            }
            onSubmit={()=>userUpdate()}
            validationSchema={profileValidation}
         >

          {(formik)=>(
              <>
        
              <Form method='post' form-enctype='multipart/form-data'>
                      
              <Row display='flex' marginTop={36} >
              <Box bg='#ffff' padding={16} radius={5}>
                  <Row display='flex' gap={16} responsive={true}>
                    <Box>
                      <Input label='Picture ' type={'file'} name='image' onChange={onChangeFile}/>
                    </Box>
                     <Box>
                      <Input label='name ' type={'text'} placeholder='Name' defaultValue={user?.name}  name='name' onChange={onChange} />
                      <Input label='Email ' type={'text'} placeholder='email@email.com' defaultValue={user?.email}  name='email' onChange={onChange}/>    
                    </Box>
                     <Box>
                      <Input label='Gender '  type={'text'} placeholder='Male'  name='gender' onChange={onChange} top={16} />            
                    </Box>
                  </Row>
                  <Row justifyContent="flex-end"  gap={16} display="flex">
                  <Button width={126} txtbutton='Save'/>
                  </Row>
              </Box>
             
            </Row>
            <Row marginTop={16} >
               <Box bg='#ffff' padding={16} radius={5}>
                  <Row>
                      <Title size={18}>Change Password</Title>
                    </Row>
                  <Row display='flex' gap={16} responsive={true}>
                  
                    <Box>
                      <Input label='Current Password ' type={'password'}  name='password' onChange={onChange} />
                    </Box>
                     <Box>
                      <Input label='New Password ' type={'password'} name='confirmPassword' onChange={onChange} />
                    </Box>
                     <Box>
                    
                      <Input label='Repeat Password ' type={'password'}  name='newPassword' onChange={onChange}/>
                   
                    </Box>
                  </Row>
                  <Row justifyContent="flex-end"  gap={16} display="flex">
           
                    <Button width={126} txtbutton='Save'/>
                  </Row>
              </Box>
            </Row>
              </Form>
              </>
          )}
         </Formik>
        </Container>
    </ProfileWrapper>
  )
}

export default Profile;