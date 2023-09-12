import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Layout from './layout/Layout'
import game from './components/MemoriaAnimales'

const App = () => {
  return (
    <NextUIProvider>
    <Layout/>

   </NextUIProvider>
  )
}

export default App