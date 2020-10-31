import React from 'react';
import './shopping-cart.css';
import CartItems from './cart-items/cart-items'
import CartForm from './cart-form/cart-form';
import RecentItems from './recent-items/recent-items'

const ShoppingCart = (props) => {

    return (
        <div className='shopping-cart-container'>
            <div className='shopping-cart'>
                <div className='shopping-column'>
                    <div className='shopping-cart-name'>
                        <h1 className='customer-login'>Shopping</h1>
                        <h1 className='customer-login'>Cart</h1>
                        <h1 className='customer-login'>_</h1>
                    </div>
                </div>
                <div className='column-right'>
                    <CartItems cart={props.cart} setSection={props.setSection} handleRemoveItem={props.handleRemoveItem}/>
                    <CartForm cart={props.cart} />
                </div>
            </div>
            <div className='recent-items'>
                <RecentItems recentItems={props.recentItems} />
            </div>
        </div>
    )
}

export default ShoppingCart;