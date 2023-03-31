import React from 'react'
import {Routes, Route , Navigate} from "react-router-dom"
import Home from '../../Pages/Home'
import Admin from '../../Pages/Admin'
import Doctor from '../../Pages/Doctor'
import Login from '../../Pages/Login'
import Patients from '../../Pages/Patients'
import Register from '../../Pages/Register'


export default function Routers() {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to= "/home"/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/admin' element = {<Admin/>}/>
        <Route path='/patients' element = {<Patients/>}/>
        <Route path='/doctor' element = {<Doctor/>}/>
        {/*<Route path='/login' element = {<Login/>}/>*/}
        <Route path='/register' element = {<Register/>}/>
    </Routes>
  )
}