import { useParams } from "react-router-dom";

export const FormDepartamento = () => {
    const { id } = useParams()
    const isSaving = id === 'nuevo'
    return (
        <div>
             {!isSaving ? ('Editando : ' + id ): 'Guardando'} 
        </div>
    )
}