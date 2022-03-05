import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Empleados } from './components/Empleados';
import { Departamentos } from './components/Departamentos';

import './custom.css'
import { FormDepartamento } from './components/FormDepartamento';
import { FormEmpleado } from './components/FormEmpleado';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Empleados} />
        <Route path='/empleados' component={Empleados} />
        <Route path='/departamentos' component={Departamentos} />
        <Route path='/departamento/guardar/:id' component={FormDepartamento} />
        <Route path='/empleado/guardar/:id' component={FormEmpleado} />
      </Layout>
    );
  }
}
