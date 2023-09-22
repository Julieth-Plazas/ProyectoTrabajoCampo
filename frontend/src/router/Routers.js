import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Register from '../components/Register'
import Admissions from '../components/Admissions'
import Home from '../components/Home'
import Publications from '../components/Publications'
import RegisterCourses from '../components/RegisterCourses'
import AsignCourse from '../components/AsignCourse'

import Games from '../components/games/Games'
import RegisterNotice from '../components/RegisterNotice'
import ProductTable from '../components/CrudTable'





const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admisiones" element={<Admissions />} />
        <Route path="/publicar" element={<Publications />} />
        <Route path="/registerCourses" element={<RegisterCourses />} />
        <Route path='/asignarCurso' element={<AsignCourse/>}/>
        <Route path="/curso/:id" element={<Games />} />
        <Route path='/registerNotice' element={<RegisterNotice/>}/>
        <Route path='/listarDocentes' element={<ProductTable/>}/>



        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routers
