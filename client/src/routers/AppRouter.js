/* eslint react/prop-types: 0*/
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/afterLogin';

const AppRouter = () =>
(
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;