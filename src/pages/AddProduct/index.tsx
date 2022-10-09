import React,{useState} from 'react';
import Box from "components/Box";
import Container from "components/Container";
import Editor from "components/EditorText";


import Input from "components/Form";

import Nav from "components/Nav";

import Row from "components/Row";

import { HiOutlineShoppingCart, HiPlus, HiShoppingCart, HiUpload, HiX, HiXCircle } from "react-icons/hi";
import { AddProductWrapper, BoxColors, BoxIcone, PageHeader, ProductAddImage, ProductAvailability, ProductBox, ProductHeader, ProductImages,ProductItem,Title } from "./styles";
import ps5 from '../../assets/products/ps5.jpg'
import Select from "components/Select";
import Button from "components/Buttons";
import { Form, Formik } from "formik";
import { products as HTTPproduct } from 'libs/http/product/product';
import { productValidation } from 'libs/validation/users';
import { data } from 'components/ChartVertical';
 import { ToastContainer, toast } from 'react-toastify';
const productInfos={
  name:"",
  description:"",
  richDescription:"",
  brand:"",
  price:"",
  categoria:"",
  countInStock:"",
  rating:"",
  numReviews:"",
  isFeatured:"",
  
}

const AddProduct = () =>{
const notify = () => toast("Product save success");
  const [product,setProduct]=useState(productInfos);
  const [file,setFile]=useState<any>();

  const onChange=(e:any)=>{
    setProduct((prevState)=>({
      ...prevState,
      [e.target.name]:  e.target.value
    }))
    console.log(product);
  }
  const onChangeFile=(e:any)=>{
    setFile(e.target.files)
    console.log(file);
  }
  const onChangeFilePrincipal=(e:any)=>{
    setFile(e.target.files[0])
    console.log(file);
  }

  
  const addProd=async()=>{

    const formData=new FormData();


    //     for (let index =0; index < file.length; index++){ 
    //     const data=file[index];
    //     const names=file[index].name;
    //     formData.append('image',data);
    //     formData.append('imagename','https://localhost:8000/images/'+names);
    // }

    formData.append('image',file);
    formData.append('name',product.name);
    formData.append('description',product.description);
    formData.append('richDescription',product.richDescription);
    formData.append('brand',product.brand);
    formData.append('price',product.price);
    formData.append('categoria',product.categoria);
    formData.append('countInStock',product.countInStock)
    formData.append('rating',product.rating)
    formData.append('numReviews',product.numReviews)
    formData.append('isFeatured',product.isFeatured)

    
    try{
      const res =  await HTTPproduct.addProducts(formData);
      notify();

    }catch(error){
      console.log(error);
    }
  

  }

  const onChangeEditor=(e:any)=>{
    setProduct((prevState)=>({
      ...prevState,
      richDescription:e
    }))
  }
  

  return(
    <AddProductWrapper>
       
        <Nav/>
        <Container responsive={true} paddingTop={46}>
           <ToastContainer />
           <PageHeader>
            <h1>Add new product</h1>
            <HiX/>
           </PageHeader>
    <Row>
    <Formik
      enableReinitialize
      initialValues={productInfos}
      onSubmit={()=>addProd()}
    >
        {
          (formik)=>(
            <Form method='post' form-enctype='multipart/form-data'>
                <Row display='flex' gap={16} responsive={true}>
                  <Box>
                    <Input type='text' name='name' placeholder='Product' onChange={onChange} />
                    <Input type='text' name='description' placeholder='Description' onChange={onChange} />
                    <Input type='text' name='brand' placeholder='Brand' onChange={onChange} />
                    <Input type='text' name='categoria' placeholder='Category' onChange={onChange}/>
                    <Input type='text' name='countInStock' placeholder='Stock' onChange={onChange}/>
                    <Input type='text' name='numReviews' placeholder='Reviews' onChange={onChange}/>
                  
                    <Editor onChange={onChangeEditor}/>

                  </Box>
                  <Box>
                    <Input type='number' name='price' placeholder={'999'} onChange={onChange}/>
                    <Input type='text' name='isFeatured' placeholder={'True or False'} onChange={onChange}/>
                    <Input type='text' name='rating' placeholder='' onChange={onChange}/>
                    <Input type='file' name='image' onChange={onChangeFile}/>
                    <Input type='file' name='image' onChange={onChangeFilePrincipal}/>
                    <Button>Submit</Button>
                  </Box>
                </Row>
             
            
            </Form>
          )
        }
    </Formik>

    </Row>
{/* 
           <Row display='flex' gap={8} responsive={true}>
            <Box flex={1}>
              <Box bg='#FFFFFF' radius={5} flex={1} padding={16}>
                <Form label={'Product Name'} />
                <Row display='flex' gap={8} responsive={true}>
                  <Box flex={2}>
                    <Form label={'Product Name'} />
                  </Box>
                  <Box flex={1}>
                    <Form label={'Product Name'} />
                  </Box>
                </Row>
                <Form label={'Brand'} />
            
               </Box>
             <ProductImages>
                <ProductHeader>
                  <Row display='flex' align="center">
                      <Box>
                        <Title>Products Image</Title>
                      </Box>
                        <Box display="flex" justify="flex-end">
                            <BoxIcone>
                              <HiPlus/>
                            </BoxIcone>
                      </Box>
                  </Row>
                     
                </ProductHeader>
                <ProductBox>
                
                  {[1,2,3].map(()=>
                    <ProductItem>
                    <HiXCircle color='red' size={24}/>
                    <img src={ps5}/> 
                  </ProductItem>)}
                  <ProductAddImage>
                      <HiUpload/>
                      <p>
                        Drag images or Click to Upload
                      </p>
                  </ProductAddImage>
                </ProductBox>
              </ProductImages>
     <ProductImages>
                <ProductHeader>
                  <Row display='flex' align="center">
                      <Box>
                        <Title>Carrousel Images </Title>
                      </Box>
                        <Box display="flex" justify="flex-end">
                            <BoxIcone>
                              <HiPlus/>
                            </BoxIcone>
                      </Box>
                  </Row>
                     
                </ProductHeader>
                <ProductBox>
                
                  {[1,2,3].map(()=>
                    <ProductItem>
                    <HiXCircle color='red' size={24}/>
                    <img src={ps5}/> 
                  </ProductItem>)}
                  <ProductAddImage>
                      <HiUpload/>
                      <p>
                        Drag images or Click to Upload
                      </p>
                  </ProductAddImage>
                </ProductBox>
              </ProductImages>
            </Box>
            <Box  flex={1}>
                    <Box bg='#FFFFFF' padding={16}>
                         <Form label={'Add Size'} />
                         <Form label={'Add Color'} />
                         <Button txtbutton="Save Product" />
                    </Box>
              
            </Box>
           </Row> */}

        </Container>
    </AddProductWrapper>
  )
}

export default AddProduct;