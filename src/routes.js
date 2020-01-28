import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Login from './pages/login/loginPage';
import Dashboard from './pages/dashboard/dashboardPage';
import Reset from './pages/resetLogin/reset';
import ResetPass from './pages/resetLogin/resetPassword';
import PowerBI from './pages/powerBI/powerBI';
import PageMap from './pages/mapa/map';
import Register from './pages/register/register';
import Questions from './pages/askingQuestions/askingQuestions';
import Teste from './pages/teste/teste';
import ListUC from './pages/dashboard/ucs/ucs';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/mapa" exact component={PageMap} />
        <Route path="/painel" exact component={Dashboard} />
        <Route path="/powerbi" exact component={PowerBI} />
        <Route path="/login/resetar" exact component={Reset} />
        <Route path="/login/resetar_senha" exact component={ResetPass} />
        <Route path="/novo_cadastro" exact component={Register} />
        <Route path="/duvidas_frequentes" exact component={Questions} />
        <Route path="/teste" exact component={Teste} />
        <Route path="/lista_de_ucs" exact component={ListUC} />
      </Switch>
    </BrowserRouter>
  );
}
