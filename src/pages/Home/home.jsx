import { useState } from 'react'
import './App.css'
import AppRoutes from './routes'
import Temp from '../../components/index'
import Routes from 'react-router-dom'

    function App() {
      return (
      <>
        <AppRoutes />
        <Temp />
        <Routes />
      </>
  )
}

export default App