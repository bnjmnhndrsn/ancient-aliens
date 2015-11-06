'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import QuoteList from './components/quote'
import quotes from './quotes'

const App = React.createClass({
    getInitialState: function(){
        return quotes;
    },
    render() {
        return (
            <div>
                <div className="container">
                    <QuoteList data={this.state.data} />
                </div>
            </div>
        );
    }
});

ReactDom.render((
    <App />
), document.getElementById('app'));
