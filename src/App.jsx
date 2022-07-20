import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import PostForm from './Components/Posts/PostForm'
import RegisterForm from './Components/Auth/RegisterForm'
import LoginForm from './Components/Auth/LoginForm'
import PostDetail from './Components/Posts/PostDetail'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<PostForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/post/:id' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
