import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Principal from './pages/Main';
import Atividades from './pages/Atividades';
import Cadastro from './pages/cadastro';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Principal} path='/' exact />
                <Route component={Login} path='/login' />
                <Route component={Cadastro} path='/cadastro' />
                <Route component={Atividades} path='/atividades' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;  