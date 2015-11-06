'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Header from './components/header';
import Search from './components/search';

const App = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Search />
                </div>
            </div>
        );
    }
});

const AppRouter = React.createClass({
    render() {
        return (
            <Router history={createBrowserHistory({queryKey: false})}>
                <Route path="/" component={App}></Route>
            </Router>
        );
    }
});

ReactDom.render((
    <AppRouter />
), document.getElementById('app'));
