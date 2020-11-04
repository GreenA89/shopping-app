import React from 'react';
import './header.css';
import headerImages from '../header-images/header-images';

const Header = (props) => {

    let index = props.category;

    return (
        <div className='header'  style={{backgroundImage: headerImages[index].image, backgroundSize: 'cover',}}>
            <h1>{headerImages[index].text}</h1>
        </div>
    )
}

export default Header;