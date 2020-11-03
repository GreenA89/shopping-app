import React from 'react';
import './black-out.css';

const BlackOut = (props) => {
    return (
        <div className={props.searchStatus ? 'black-out-show' : 'black-out-hide'} onClick={props.setSearch}>

        </div>
    )
}

export default BlackOut;