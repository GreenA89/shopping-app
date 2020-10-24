import React, { useState } from 'react';
import products from '../products/products'
import './tiles-container.css'

const TilesContainer = () => {

    const [focus, setFocus] = useState(false);
    const [current, setCurrent] = useState(0);

    const handleFocusTrue = (x, i) => {
        setFocus(x);
        setCurrent(i);
    }

    console.log(focus);
    return (
        <div className='tiles-container'>
            {products.map((product, i) => 
                <div className='tile-container' key={i} onMouseEnter={() => handleFocusTrue(true, i)} onMouseLeave={() => handleFocusTrue(false)}>
                    <div className='tile-image'>
                        <img className={focus && current === i ? 'image-focus' : 'image'} src={focus && current === i? product.backupurl : product.url}></img>
                        <button className={focus && current === i ? 'quick-shop' : 'quick-shop-hide'}>QUICK SHOP</button>
                    </div>
                    <div className='tile-text font'>
                        <p className='product-name'><b>{product.productname}</b></p>
                        <p className='product-price'><em>${product.price}.00</em></p>
                    </div>
                </div>)}
        </div>
    )
}

export default TilesContainer;