'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let SearchForm = React.createClass({
    formChange(e) {
        this.props.onSearchFormChange(this.refs.q.value.trim());
    },

    render() {
        return (
            <form onChange={this.formChange}>
                <input type="text" ref="q"/>
            </form>
        );
    }
});

export default SearchForm;
