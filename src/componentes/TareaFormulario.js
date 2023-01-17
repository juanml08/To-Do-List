import React, { useState } from "react";
import '../estilos/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }
    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id:uuidv4(),
            texto: input,
            completada: false
        }
        props.pepito(tareaNueva);
    }

    return (
        <form className='tarea-formulario'>
            <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una Tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button onClick={manejarEnvio} className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;