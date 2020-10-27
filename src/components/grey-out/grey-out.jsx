import React from 'react';
import './grey-out.css';

const GreyOut = (props) => {

    return (
        <div className={`grey-out${props.toggleDropDown ? ' show-grey' : ' hide-grey'}`}>

        </div>
    )
}

export default GreyOut;