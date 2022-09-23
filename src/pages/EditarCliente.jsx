import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const [cliente, setcliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteApi = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setcliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(()=>{

        setCargando(!cargando);
      }, 1000)
    };

    obtenerClienteApi();
  }, []);
  
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Utilice este formulario para editar los datos de un cliente</p>

      {cliente?.nombre ? (
        <Formulario
          cliente = {cliente}
          cargando = {cargando}
        />
      ) : <p>Cliente ID no valido</p>}
    </>
  )
}

export default EditarCliente 