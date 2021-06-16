import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EnterNumber from '../components/Login/enterNumber';
import VerifyNumber from '../components/Login/verifyNumber';
import Home from '../components/Home/index';
export default function index() {
    return (
        <div>
            <Switch>
                <Route path="/login" exact>
                    <EnterNumber />
                </Route>
                <Route path="/verify" exact>
                    <VerifyNumber />
                </Route>
                <Route path={['/home', '/']} exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}
