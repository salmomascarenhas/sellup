import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Login from './pages/Login';
import Principal from './pages/Main';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route component={Principal} path='/' exact/>
            <Route component={Login} path='/login'/>
            <Route component={Cadastro} path='/cadastro'/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;  