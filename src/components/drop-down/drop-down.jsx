import React from 'react';
import DropDownLinks from '../drop-down-links/drop-down-links';
import './drop-down.css';

const DropDown = (props) => {

    let index = props.toggleSection;

    return (
            <div 
                className={`drop-down${props.toggleDropDown ? ' show' : ' hide'}`}
            >
                {props.toggleDropDown ? DropDownLinks[index].map((link, key) =>
                    <button className='button large-font margin-right-large' key={key}>{link}</button>
                ) : null}
            </div>
    )
}

export default DropDown;