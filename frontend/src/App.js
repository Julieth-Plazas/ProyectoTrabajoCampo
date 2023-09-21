import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Layout from './layout/Layout'
//import CrudTable from './components/CrudTable'
//import GameColors from './components/GameColors1'

const App = () => {
  return (
   <NextUIProvider>



       <Layout/>
   </NextUIProvider>
  )
}

export default App
