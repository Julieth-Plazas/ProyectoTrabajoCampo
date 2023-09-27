import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Layout from './layout/Layout'
import CrudTable from './components/MemoriaVocal'
import GameColors from './components/GamesSumRes1'

const App = () => {
  return (
  <NextUIProvider>
    <Layout/>
   </NextUIProvider>


  )
}

export default App
