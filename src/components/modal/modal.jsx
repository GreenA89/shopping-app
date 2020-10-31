import React, { useState } from 'react';
import './modal.css';

const Modal = (props) => {

    const [image, setImage] = useState(0);
    const [quantity, setQuantity] = useState(1)

    const handleImage = (value) => {
        setImage(value)
    }

    const handleQuantity = (event) => {
        setQuantity(Number(event.target.value));
    }

    return (
        <div onMouseEnter={() => props.handleRecentItems(props.data)}>
            <div className='background' onClick={props.handleModal}></div>
            <div className='modal font'>
            <button className='close-button' onClick={props.handleModal}>x</button>
            <div className='image-swap'>
                <div className={image === 0 ? 'circle-active' : 'circle'} onClick={() => handleImage(0)}></div>
                <div className={image === 1 ? 'circle-active' : 'circle'} onClick={() => handleImage(1)}></div>
            </div>
                <div className='modal-image-container'>
                    <img className='modal-image' alt='item' src={image === 0 ? props.data.url : props.data.backupurl}></img>
                </div>
                <div className='modal-text'>
                    <div className='modal-header'>
                        <h3 className='modal-product-name'><b>{props.data.productname}</b></h3>
                    </div>
                    <div className='modal-price'><b>${props.data.price + '.00'}</b></div>
                    <div className='modal-buttons'>
                        <input className='quantity' defaultValue={1} type='number' value={quantity} onChange={handleQuantity}></input>
                        <button className='add-to-cart' onClick={() => props.handleCart({item: props.data, quantity: quantity})}>ADD TO CART</button>
                    </div>
                    <div className='modal-description'>{props.data.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;