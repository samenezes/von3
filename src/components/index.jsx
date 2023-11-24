import { useState } from 'react';
import { Link } from 'react-router-dom';
import Adicionadas from "../pages/Adicionadas/index"
import Concluídas from "../pages/Excluidas/index"
import Temp from '../components/'

const Temper = () => {
    const [temperatura, setTemperatura] = useState([]);
    const [temperaturasConcluidas, setTemperaturasConcluidas] = useState([]);
    const [excluirTemperatura, setExcluirTemperatura] = useState('');
    const [mostrarTemperatura, setMostrarTemperatura] = useState(true);
    const [mostrarTConcluidas, setMostrarTConcluidas] = useState(false);

    function adicionarTemperatura() {
        if (temperatura.trim() !== '') {
          setTemperatura([...temperatura, { t: temperatura, estado: true }]);
          setTemperatura('');
        }
      }

      function alterarEstadoTemperatura(num) {
        const novaTemperatura = [...temperatura]
        novaTemperatura[num].estado = !novaTemperatura[num].estado;
        setTarefas(novaTemperatura);

      function excluirTemperatura(index) {
        const novaTemperatura = [...temperatura];
        novaLista.splice(index, 1);
        setTarefas(novaTemperatura);
      }
      
      return (
        <>
          <form>
            <textarea id='temperatura' value={temperatura} onChange={(e) => setTemperatura(e.target.value)}></textarea>
            <button type='button' onClick={adicionarTemperatura}>+</button>
            <button
              type='button'
              onClick={() => {
                setMostrarTemperatura(true);
                setMostrarTConcluidas(false);
              }}
            >
              Mostrar Ativas
            </button>
              <Link to={'/concluidas'}>
            <button
              type='button'
              onClick={() => {
                setMostrarTemperatura(false);
                setMostrarTConcluidas(true);
              }}
            >
              Mostrar Temperaturas
            </button>
          </Link>
          </form>
    
          <main>
            {tarefas.length > 0 &&
              mostrarTemperatura
                ? temperatura.map((task, index) => (
                    <Temp key={index} task={task} num={index} alterarEstadoTemperatura={alterarEstadoTemperatura} excluirTemperatura={excluirTemperatura}/>
                  ))
                : null}
            {temperaturasConcluidas.length > 0 &&
              mostrarTConcluidas
                ? temperaturasConcluidas.map((task, index) => (
                    <Temp key={index} task={task} num={index} alterarEstadoTemperatura={alterarEstadoTemperatura} excluirTemperatura={excluirTemperatura}/>
                  ))
                : null}
          </main>
        </>
      );
    }
}
export default Temper