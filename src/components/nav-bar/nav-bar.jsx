import React from 'react';
import './nav-bar.css';
import Cart from './cart/cart'
import Logo from '../logo/logo';
import DropDown from '../drop-down/drop-down';


const NavBar = (props) => {
    return (
        <div className='container' onMouseLeave={props.handleToggleFalse}>
            <div className='row nav-bar' > 
                <Logo className='font-size'/>
                <div className='row row-links'>
                    <button className='font button showOnDesktop' onMouseEnter={() => props.handleToggleTrue(0)} onClick={() => props.setCategory(0)}>New</button>
                    <button autofocus='true' className='font button showOnDesktop' onMouseEnter={() => props.handleToggleTrue(1)} onClick={() => props.setCategory(1)}>Stationary</button>
                    <button className='font button showOnDesktop' onMouseEnter={() => props.handleToggleTrue(2)} onClick={() => props.setCategory(2)}>Living</button>
                    <button className='font button showOnDesktop' onMouseEnter={() => props.handleToggleTrue(3)} onClick={() => props.setCategory(3)}>Accessories</button>
                    <button className='font button showOnDesktop' onMouseEnter={() => props.handleToggleTrue(4)} onClick={() => props.setCategory(4)}>Apparel</button>
                    <button className='font button showOnDesktop' onMouseEnter={props.handleToggleFalse}  onClick={() => props.setCategory(5)}>Kids</button>
                    <button className='font button showOnDesktop' onMouseEnter={() => props.handleToggleTrue(5)} onClick={() => props.setCategory(6)}>Sale</button>
                    <button className='font button showOnDesktop' onMouseEnter={props.handleToggleFalse} onClick={() => props.setSection('shop-in-store')}>Shop In-Store</button>
                    <button className='font button showOnDesktop' onMouseEnter={props.handleToggleFalse} onClick={() => props.setSection('custom')}>Custom</button>
                    <button className='font button showOnDesktop' onMouseEnter={props.handleToggleFalse} onClick={() => props.setSection('login')}>Login</button>
                    <Cart setSection={props.setSection} setSearch={props.setSearch} />
                </div>
            </div>
            <DropDown toggleDropDown={props.toggleDropDown} toggleSection={props.toggleSection}/>
        </div>
    )
}

export default NavBar;