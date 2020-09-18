import React from 'react';
import DropDownLinks from '../drop-down-links/drop-down-links';
import './drop-down.css';

const DropDown = (props) => {

    let index = props.toggleSection;
    console.log(index)

    return (
        <div 
            className={`drop-down${props.toggleDropDown ? ' show' : ' hide'}`}
        >
            {props.toggleDropDown ? DropDownLinks[index].map(link =>
                <button className='button large-font margin-right-large'>{link}</button>
            ) : null}
        </div>
    )
}

export default DropDown;