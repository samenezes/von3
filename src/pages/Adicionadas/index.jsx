import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Temp from '../../components/index'

const Adicionadas = (temperaturaAdicionada) => {
    console.log(temperaturaAdicionada.temperaturaAdicionada)
    return (
        <>
            <header>
                <Link to="/">Home</Link>
            </header>
            <div>
                <h2>Tarefas Concluídas</h2>
                {temperaturaAdicionada.length > 0 ? (
                    temperaturaAdicionada.map((temp, index) => (
                        <Temp key={index} temp={temp} num={index} alterarEstadoTarefa={alterarEstadoTemperatura} removerTemperatura={removerTemperatura} />
                    ))
                ) : (
                        <p>Nenhuma temperatura adicionada.</p>
                    )}
            </div>
        </>
    );
}

export default Adicionadas