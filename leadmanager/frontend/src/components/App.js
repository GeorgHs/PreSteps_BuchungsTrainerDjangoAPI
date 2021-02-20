import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Alerts from "./layout/Alerts";


import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Register from './accounts/Register';
import Login from './accounts/Login';

import { PureComponent } from 'react'

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider >
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));