import React, {Component} from 'react';

class SearchBox extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div>
            <textarea value='Search'/>
        </div>
        ); 
    }
}

export default SearchBox;