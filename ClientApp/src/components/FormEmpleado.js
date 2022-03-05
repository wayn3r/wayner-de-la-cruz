import { useParams } from "react-router-dom";

export const FormEmpleado = () => {
    const { id } = useParams()
    const isSaving = id === 'nuevo'
    return (
        <div>
            <h2>Formulario de empleado</h2>
             {!isSaving ? ('Editando: ' + id ): 'Guardando'} 
        </div>
    )
}