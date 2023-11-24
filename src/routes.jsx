import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Temp from './components/index'
import Adicionadas from './pages/Adicionadas/index'

function AppRoutes() {
    const [temperaturaAdicionadas, setTemperaturaAdicionadas] = React.useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Temp />} />
                <Route path='/concluidas' element={<Adicionadas temperaturaAdicionadas={temperaturaAdicionadas} />} />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes