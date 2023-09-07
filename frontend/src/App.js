import {  NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Layout from './layout/Layout'
import RegisterCourses from './components/RegisterCourses'

const App = () => {
  return (
    <NextUIProvider>
    <Layout/>

   </NextUIProvider>
  )
}

export default App
