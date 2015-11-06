'use strict';

import React from 'react';

let QuoteList = React.createClass({    
    render() {
        if (this.props.data.length) {
            var quoteNodes = this.props.data.map(function(datum, index){
                return (<li key={index}>{datum.content}</li>);
            });
        } else {
            var quoteNodes = (<li>No results</li>);
        }
        
        return (
            <ul className="quoteList">
                {quoteNodes}
            </ul>
        );
    }
});

export default QuoteList;