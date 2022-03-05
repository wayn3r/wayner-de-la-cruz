import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getEmpleados = async () => {
  const response = await fetch("api/empleado");
  const data = await response.json();
  return data || [];
};
export const Empleados = () => {
  const [empleados, setEmpleados] = useState(null);
  useEffect(() => {
    getEmpleados().then(setEmpleados);
  }, []);
  const isLoading = empleados === null;
  const isEmpty = !isLoading && empleados.length === 0;
  return (
    <div>
      <Link to="/departmanto/guardar/">Agregar empleado</Link>
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <td>Nombres</td>
            <td>Apellidos</td>
            <td>Cedula</td>
            <td>Posicion</td>
            <td>Departamento</td>
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
            empleados.map((empleado) => {
              const { id, nombres, apellidos, cedula, posicion, departamento } =
                empleado;
              return (
                <tr key={id}>
                  <td>{nombres}</td>
                  <td>{apellidos}</td>
                  <td>{cedula}</td>
                  <td>{posicion}</td>
                  <td>{departamento.nombre}</td>
                  <td>
                    <Link to={`/empleado/guardar/${id}`}>Editar</Link> / 
                    <Link to={`/empleado/eliminar/${id}`}>
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
