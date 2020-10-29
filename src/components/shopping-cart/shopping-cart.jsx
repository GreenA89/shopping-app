import React from 'react';
import './shopping-cart.css';

const ShoppingCart = (props) => {
    return (
        <div className='shopping-cart'>
            <div className='shopping-column'>
                <div className='shopping-cart-name'>
                    <h1 className='customer-login'>Shopping</h1>
                    <h1 className='customer-login'>Cart</h1>
                    <h1 className='customer-login'>_</h1>
                </div>
            </div>
            <div className='cart-items shopping-column'>
                {props.cart.length === 0 &&
                    <div className='empty-cart-container font'>
                        <p>Your cart is currently emtpy</p>
                        <button className='browsing-button' onClick={() => props.setSection('store')}>CONTINUE BROWSING</button>
                    </div>
                }
                {props.cart.length > 0 &&
                    props.cart.map((product, i) => 
                        <div className='cart-item'>
                            <div className='cart-item-name-image'>
                                <img className='cart-item-image' src={product.item.url}></img>
                                <div className='cart-item-name'>
                                    <p>{product.item.productname}</p>
                                    <p>${product.item.price}.00</p>
                                </div>
                            </div>
                            <div className='cart-item-quantity-close'>
                                <div>{product.quantity}</div>
                                <button onClick={() => props.handleRemoveItem(i)}>X</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ShoppingCart;