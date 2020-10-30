import React from 'react';
import '../shopping-cart.css';

const CartForm = (props) => {

    let totalPrice = props.cart.length === 0 ? 0 : props.cart.map(product => product.item.price * product.quantity).reduce((a, b) => a + b);

    return (
        <div className='cart-form'>
            {props.cart.length > 0 &&
                <div className='cart-form-options'>
                    <textarea className='special-instructions'></textarea>
                    <h3 className='total-price font'>Total: <b style={{fontSize: '25px'}}>${totalPrice}.00</b></h3>
                    <h2 className='font interest'>or 4 interest-free installments of ${totalPrice / 4}.00 by &nbsp;
                        <span><img src='https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png'></img></span>&nbsp;
                        <span><a style={{fontWeight: 'normal', borderBottom: '1px solid', fontSize:'0.6vw'}} className='button underline'>More Info</a></span>
                    </h2>
                    <p className='shipping'>Shipping & taxes calculated at checkout</p>
                </div>
            }
        </div>
    )
}

export default CartForm;