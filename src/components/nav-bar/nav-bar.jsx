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
                <div className='row margin-right'>
                    <button className='margin-right font button' onMouseEnter={() => props.handleToggleTrue(0)} onClick={() => props.setCategory(0)}>New</button>
                    <button autofocus='true' className='margin-right font button' onMouseEnter={() => props.handleToggleTrue(1)} onClick={() => props.setCategory(1)}>Stationary</button>
                    <button className='margin-right font button' onMouseEnter={() => props.handleToggleTrue(2)} onClick={() => props.setCategory(2)}>Living</button>
                    <button className='margin-right font button' onMouseEnter={() => props.handleToggleTrue(3)} onClick={() => props.setCategory(3)}>Accessories</button>
                    <button className='margin-right font button' onMouseEnter={() => props.handleToggleTrue(4)} onClick={() => props.setCategory(4)}>Apparel</button>
                    <button className='margin-right font button' onMouseEnter={props.handleToggleFalse}  onClick={() => props.setCategory(5)}>Kids</button>
                    <button className='margin-right font button' onMouseEnter={() => props.handleToggleTrue(5)} onClick={() => props.setCategory(6)}>Sale</button>
                    <button className='margin-right font button' onMouseEnter={props.handleToggleFalse}>Shop In-Store</button>
                    <button className='margin-right font button' onMouseEnter={props.handleToggleFalse}>Custom</button>
                    <button className='margin-right font button' onMouseEnter={props.handleToggleFalse}>Login</button>
                    <Cart />
                </div>
            </div>
            <DropDown toggleDropDown={props.toggleDropDown} toggleSection={props.toggleSection}/>
        </div>
    )
}

export default NavBar;