import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Alerts from "./layout/Alerts";


import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

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
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider >
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));