import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

  *{
    padding:0px;
    margin:0px;
    outline:none;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;

  }

body{
    background-color:#383854 ;
}

a{
  color:white;
  text-decoration:none;

}
  .avatar-users{
    width:150px;
    position:relative;
   
  }

  .error{
  
    color:red;
    width:100%;
    text-align:left ;
    display:flex;
    justify-content:flex-start;
  
  }

`


