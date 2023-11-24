import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Temp from '../../components/index'

const Excluidas = (temperaturaExcluida) => {
    console.log(temperaturaExcluida.temperaturaExcluida)
    return (
        <>
            <header>
                <Link to="/">Home</Link>
            </header>
            <div>
                <h2>Temperaturas</h2>
                {temperaturaExcluida.length > 0 ? (
                    temperaturaExcluida.map((task, index) => (
                        <Temp key={index} task={task} num={index} alterarEstadoTemperatura={alterarEstadoTemperatura} removerTemperatura={removerTemperatura} />
                    ))
                ) : (
                        <p>Nenhuma temperatura Excluida.</p>
                    )}
            </div>
        </>
    );
}

export default Excluidas