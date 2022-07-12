import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import PostForm from './Components/Posts/PostForm'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-post' element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
