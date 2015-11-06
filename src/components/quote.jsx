'use strict';

import React from 'react';

let Quote = React.createClass({
    render() {
        return (
            <li className="quote">
                {this.props.content}
            </li>
        )
    }
});

let QuoteList = React.createClass({    
    render() {
        var quoteNodes = this.props.data.map(function(datum, index){
            return (
                <Quote content={datum.content} key={index}>
                    {datum.content}
                </Quote>
            );
        });
        
        return (
            <ul className="quoteList">
                {quoteNodes}
            </ul>
        );
    }
});

export default QuoteList;