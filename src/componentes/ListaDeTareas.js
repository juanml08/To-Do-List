import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../estilos/ListaDeTareas.css'
import Tarea from "./Tarea";


function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }
    const completarTarea = id => {
        const tareaRealizada = tareas.find(tarea => tarea.id === id)
        tareaRealizada.completada = true;
        setTareas([...tareas]);
    }
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas);
    }
    return (
        <>
            <TareaFormulario pepito={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
                LISTA DE TAREAS
            </div>

        </>
    )
}

export default ListaDeTareas;