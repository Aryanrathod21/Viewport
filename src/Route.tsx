import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Home from './app/page'
import Login from './app/Login/page'

type Props = {}

const Route = (props: Props) => {
  return (
    <>
    <BrowserRouter>
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default Route