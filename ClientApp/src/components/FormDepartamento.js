import { useParams } from "react-router-dom";

export const FormDepartamento = () => {
    const { id } = useParams()
    const isSaving = id === 'nuevo'
    return (
        <div>
            <h2>Formulario de departamento</h2>
             {!isSaving ? ('Editando : ' + id ): 'Guardando'} 
        </div>
    )
}