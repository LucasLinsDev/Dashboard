import React from 'react';
import { BlogIcone, LogoBlogWrapper } from './styles';
import blog_logo from '../../../assets/icones/blog_logo.png'

interface IPropsLogo{
  txt?:string
}

const LogoBlog=({txt}:IPropsLogo)=>{
  return(
    <React.Fragment>
        <LogoBlogWrapper>
          <BlogIcone src={blog_logo}/>
          <h1>{}</h1>
        </LogoBlogWrapper>
    </React.Fragment>
  )
}

export default LogoBlog