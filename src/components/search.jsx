'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import serialize from 'form-serialize';

let Search = React.createClass({
    render() {
        return (
            <div className="search">
                <h2>Search Listings</h2>
                <SearchForm />
            </div>
        );
    }
});

let SearchForm = React.createClass({
    getInitialState() {
        return {
            listingType: 10
        }
    },

    handleListingType(e) {
        this.setState({listingType: e.target.value});
    },

    formChange(e) {
        let form = ReactDOM.findDOMNode(this);
        let serialized = serialize(form, {hash: true});
        
        // Make form update
        console.log(serialized);
    },

    render() {
        // Optional Elements
        let dateAvailable;
        if (this.state.listingType == 10) {
            dateAvailable = (
                <div className="form-group">
                    <input className="form-control" type="text" name="date_available" placeholder="Available By" />
                </div>
            );
        }

        return (
            <form onChange={this.formChange}>
                {/* Listing Type */}
                <div className="form-group">
                    <select className="form-control" name="listing_type" onChange={this.handleListingType}>
                        <option value="10">Rentals</option>
                        <option value="20">Sales</option>
                    </select>
                </div>

                {/* Layout */}
                <div className="form-group">
                    <select className="form-control" name="layout" multiple>
                        <option value="10">Studio</option>
                        <option value="20">1 BR</option>
                        <option value="30">2 BR</option>
                        <option value="40">3 BR</option>
                    </select>
                </div>

                {/* Bathrooms */}
                <div className="form-group">
                    <select className="form-control" name="bathrooms">
                        <option>1 Bathroom</option>
                        <option>1.5 Bathroom</option>
                        <option>2 Bathroom</option>
                        <option>2.5 Bathroom</option>
                    </select>
                </div>

                {/* Neighborhoods */}
                <div className="form-group">
                    <select className="form-control" name="neighborhood" multiple>
                        <option>Brooklyn</option>
                        <option>Manhattan</option>
                        <option>Queens</option>
                        <option>Bronx</option>
                    </select>
                </div>

                {/* Price */}
                <div className="form-group">
                    <input className="form-control" type="number" step="100" name="min_price" placeholder="Min Price" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="number" step="100" name="max_price" placeholder="Max Price" />
                </div>

                {/* Date Available */}
                {dateAvailable}

                {/* Features */}
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="cats_allowed" /> Cats Allowed
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="dogs_allowed" /> Dogs Allowed
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="doorman" /> Doorman
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="elevator" /> Elevator
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="laundry" /> Laundry in Building
                    </label>
                </div>
            </form>
        );
    }
});

export default Search;
