


import AddPost from 'pages/AddPost';
import AddProduct from 'pages/AddProduct';
import Drag from 'pages/Drag';
import Editor from 'pages/Editor';
import Home from 'pages/Home';

import Login from 'pages/Login';
import PageEditor from 'pages/PageEditor';

import Products from 'pages/Products';
import Profile from 'pages/Profile';
import Users from 'pages/Users';

import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import LoggedInRoute from 'routes/LoggedInRoutes';

function App() {
  return (

          <Routes>

            <Route path='/login' element={<Login/>}/>
              <Route element={<LoggedInRoute/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/post' element={<AddPost/>}/>
              <Route path='/add' element={<AddProduct/>}/>
              <Route path='/editor' element={<Editor/>}/>   
              <Route path='/editing' element={<PageEditor/>}/>   
              <Route path='/drag' element={<Drag/>}/>   
              </Route>
          </Routes>
       
   
  );
}

export default App;
