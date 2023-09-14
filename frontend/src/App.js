import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Layout from './layout/Layout'
import game from './components/MemoriaAnimales'
import GameSumRes2 from './components/Figuras_Geometricas1'

const App = () => {
  return (
   <NextUIProvider>
    <Layout/>

   </NextUIProvider>
  //  <GameSumRes2/>
  )
}

export default App
