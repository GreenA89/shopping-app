import React from 'react';
import './search-bar.css';

const SearchBar = (props) => {
    return (
        <div className={props.setSearch ? 'search-bar-show' : 'search-bar-hide'}>
        </div>
    )
}

export default SearchBar;