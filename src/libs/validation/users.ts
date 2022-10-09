import * as Yup from 'yup';
export  const userValidation=Yup.object({
    email:Yup.string().required('Email addres is required')
    .email('Must Be a valid email.')
    .max(100),
    name:Yup.string().required('Name is required'),
    lastname:Yup.string().required('Last name is required'),
    phone:Yup.number(),

  })

export const profileValidation=Yup.object({
name:Yup.string().required('Name is required'),
email:Yup.string().required('Email required'),
gender:Yup.string().required('Gender is required'),
password:Yup.string().required('Insert old password'),
newPassword:Yup.string().required('Insert new password'),
confirmPassword:Yup.string().required('repeat new password')

})


  export  const productValidation=Yup.object({
    name:Yup.string().required('Name  is required'),
    description:Yup.string().required('Description is requierd').
    max(100),
    brand:Yup.string(),
    category:Yup.string(),
    quantity:Yup.string(),
    rating:Yup.string(),
    numReviews:Yup.string(),
    featured:Yup.string()
    
  })
  