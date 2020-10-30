import React from 'react';
import '../shopping-cart.css';

const CartItems = (props) => {

    return (
        <div className={props.cart.length === 0 ? 'cart-items-empty' : 'cart-items'}>
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
                                <p className='underline button name'><b>{product.item.productname.toUpperCase()}</b></p>
                                <p className='font price'>${product.item.price}.00</p>
                            </div>
                        </div>
                        <div className='cart-item-quantity-close'>
                            <div className='quantity font margin'>{product.quantity}</div>
                            <button className='remove underline font' onClick={() => props.handleRemoveItem(i)}><b>X</b></button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CartItems;