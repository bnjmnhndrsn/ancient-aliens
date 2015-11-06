'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import SearchForm from './components/search';
import QuoteList from './components/quote';
import quotes from './quotes';

const App = React.createClass({
    getInitialState: function(){
        return quotes;
    },
    handleSearchFormChange: function(q){
        if (!q) {
            this.setState(quotes);
            return ;
        }
        console.log(q);
        var filteredQuotes = quotes.data.filter( quote => !!quote.content.match(q) );
        this.setState({data: filteredQuotes});
    },
    render() {
        return (
            <div>
                <div className="container">
                    <SearchForm onSearchFormChange={this.handleSearchFormChange}/>
                    <QuoteList data={this.state.data} />
                </div>
            </div>
        );
    }
});

ReactDom.render((
    <App />
), document.getElementById('app'));
