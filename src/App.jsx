import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import PostForm from './Components/Posts/PostForm'
import RegisterForm from './Components/Auth/RegisterForm'
import LoginForm from './Components/Auth/LoginForm'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<PostForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
