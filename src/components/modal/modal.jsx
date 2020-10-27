import React from 'react';
import products from '../products/products'
import './modal.css';

const Modal = (props) => {
    return (
        <div className='modal-container' onClick={props.handleModal}>
            <div className='modal'>
                <div className='modal-image'></div>
                <div className='modal-text'></div>
            </div>
        </div>
    )
}

export default Modal;