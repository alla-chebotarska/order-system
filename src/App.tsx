import React from 'react';
import {
    BrowserRouter as
        Router,
    Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import SignInPage from './components/SingInPage';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';

import * as ROUTES from './constants/routes';
import './App.css';

export default function App() {

    return (
        <Router>
            <div>
                <Navigation />

                <hr />

                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.ADMIN} component={AdminPage} />
            </div>
        </Router>
    )
}
