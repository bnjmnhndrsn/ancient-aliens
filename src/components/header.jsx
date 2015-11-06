'use strict';

import React from 'react';
import { Link } from 'react-router'

let NavbarBrand = React.createClass({
    render() {
        return (
            <Link className="navbar-brand" to="/">Navbar</Link>
        )
    }
});

let Header = React.createClass({
    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
                <div className="container">
                    <NavbarBrand />
                </div>
            </nav>
        );
    }
});

export default Header;
