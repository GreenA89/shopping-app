import React from 'react';
import './search-bar.css';

const SearchBar = ({searchStatus}) => {
    return (
        <div className={searchStatus ? 'search-bar-show' : 'search-bar-hide'}>
        </div>
    )
}

export default SearchBar;