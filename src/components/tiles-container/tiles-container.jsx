import React, { useState } from 'react';
import products from '../products/products'
import './tiles-container.css'

const TilesContainer = (props) => {

    const [focus, setFocus] = useState(false);
    const [current, setCurrent] = useState(0);

    const handleFocusTrue = (x, i) => {
        setFocus(x);
        setCurrent(i);
    }

    let sortedProducts = products;
    switch(props.sortMethod) {
        case 'featured':
            sortedProducts = products.filter(product => product.featured === true);
            break;
        case 'best-selling':
            sortedProducts = products.filter(product => product.bestseller === true);
            break;
        case 'price-low-high':
            sortedProducts = products.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-low':
            sortedProducts = products.sort((a, b) => b.price - a.price);
            break;
    }

    return (
        <div className='tiles-container'>
            {sortedProducts.map((product, i) => 
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