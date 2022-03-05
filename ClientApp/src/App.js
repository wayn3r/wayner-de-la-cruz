import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Empleados } from './components/Empleados';
import { Departamentos } from './components/Departamentos';

import './custom.css'
import { FormDepartamento } from './components/FormDepartamento';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Empleados} />
        <Route path='/departamentos' component={Departamentos} />
        <Route path='/departamento/guardar/:id' component={FormDepartamento} />
      </Layout>
    );
  }
}
