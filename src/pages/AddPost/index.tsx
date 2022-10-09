import Button from "components/Buttons"
import Container from "components/Container"
import Input from "components/Form"
import { TextArea } from "components/Form/styles"
import Nav from "components/Nav"
import Row from "components/Row"
import { Formik } from "formik"
import { BlogPost, H1, P } from "./styles"

const AddPost = () =>{
  return(
    <BlogPost >
      <Nav/>
       <Container responsive={false}>
        <Row marginTop={36}  > 
        <H1>Add Post</H1>
        <P>Fill in the fields below to add a new blog post.</P>
      </Row>
      <Formik 
        enableReinitialize
        initialValues={[]}
        onSubmit={()=>{}}
        validate={function validate(){}}
      >

        {(formik)=>(
          <>
              <Row display={'flex'} gap={16} justifyContent='space-between'  responsive={true}>
        <Input width={'100%'} label='Date' color='white' />
        <Input width={'100%'} label='Category'  color='white' />
        <Input width={'100%'} label={'Title'}  color='white' />
      </Row>
      <Row display={'flex'} gap={16} justifyContent='space-between' responsive={true} >
        <Input width={'80%'} label={'Resume the post'}  color='white' />
        <Input width={'20%'} label={'Time for read'}  color='white' />
      
      </Row>
      <Row display={'flex'} gap={16} justifyContent='space-between' >
       
        <TextArea borderRadius={5}  />
       
      
      </Row>
         <Row display={'flex'}  align='flex-end' gap={16} justifyContent='flex-end' >
            <Button width={150} txtbutton='Add Post' radius={8} />    
          </Row></>

        )}
      </Formik>
       </Container>
    </BlogPost>
  )
}

export default AddPost