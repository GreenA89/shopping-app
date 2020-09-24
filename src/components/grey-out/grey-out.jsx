import React from 'react';
import './grey-out.css';



const GreyOut = (props) => {

    console.log(props.toggleDropDown)

    return (
        <div className={`grey-out${props.toggleDropDown ? ' show-grey' : ' hide-grey'}`}>

        </div>
    )
}

export default GreyOut;