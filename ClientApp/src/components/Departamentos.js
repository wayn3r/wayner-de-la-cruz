import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getDepartamentos = async () => {
  const response = await fetch("api/departamento");
  const data = await response.json();
  return data || [];
};
export const Departamentos = () => {
  const [departamentos, setDepartamentos] = useState(null);
  useEffect(() => {
    getDepartamentos().then(setDepartamentos);
  }, []);
  const isLoading = departamentos === null;
  const isEmpty = !isLoading && departamentos.length === 0;
  return (
    <div>
      <Link to="/departamento/guardar/nuevo">Agregar departamento</Link>
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <td>Nombres</td>
            <td>Descripcion</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {isEmpty && (
            <tr>
              <td colSpan={6}>Sin registros</td>
            </tr>
          )}
          {isLoading ? (
            <tr>
              <td>Cargando...</td>
            </tr>
          ) : (
            departamentos.map((departamento) => {
              const { id, nombre, descripcion } = departamento
              return (
                <tr key={id}>
                  <td>{nombre}</td>
                  <td>{descripcion}</td>
                  <td>
                    <Link to={`/departamento/guardar/${id}`}>
                      Editar
                    </Link> / <Link to={`/departamento/eliminar/${id}`}>
                      Eliminar
                    </Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
