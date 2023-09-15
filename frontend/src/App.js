import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Layout from './layout/Layout'
import game from './components/MemoriaAnimales'
import Transicion from './components/TransicionGames'
import GameColors1 from './components/GameEnglish1'

const App = () => {
  return (
   <NextUIProvider>
   <Layout/>

   </NextUIProvider>
    // <GameColors1/>

  )
}

export default App
