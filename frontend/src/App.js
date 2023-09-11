import {  NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Layout from './layout/Layout'
import RegisterCourses from './components/RegisterCourses'
import { MemoryRouter } from 'react-router-dom'
import Memorama from './components/MemoriaVocal'

const App = () => {
  return (
    <NextUIProvider>
    <Layout/>

   </NextUIProvider>
  
  )
}

export default App
