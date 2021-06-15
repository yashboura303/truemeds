import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EnterNumber from '../components/Login/enterNumber';
import VerifyNumber from '../components/Login/verifyNumber';
import Home from '../components/Home/index';
import PrivateRoute from './PrivateRouting';
export default function index() {
    return (
        <div>
            <Switch>
                <Route path="/login" exact>
                    <EnterNumber />
                </Route>
                <PrivateRoute path="/verify" exact>
                    <VerifyNumber />
                </PrivateRoute>
                <PrivateRoute path={['/home', '/']} exact>
                    <Home />
                </PrivateRoute>
            </Switch>
        </div>
    );
}
