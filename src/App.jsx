import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import PostForm from './Components/Posts/PostForm'
import RegisterForm from './Components/Auth/RegisterForm'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-post' element={<PostForm />} />
        <Route path='/create-user' element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
