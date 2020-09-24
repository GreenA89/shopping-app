import React from 'react';
import './header.css';
import headerImages from '../header-images/header-images';

const Header = (props) => {

    let index = props.category;

    return (
        <div className='header' data-product-resize='fill' style={{backgroundImage: headerImages[index].image, backgroundSize: '100%',}}>
            <h1>{headerImages[index].text}</h1>
        </div>
    )
}

export default Header;