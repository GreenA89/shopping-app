import React from 'react';
import products from '../products/products'
import './tiles-container.css'

const TilesContainer = () => {
    return (
        <div className='tiles-container'>
            {products.map(product => 
                <div className='tile-container'>
                    <div className='tile-image'>
                        <img className='image' src={product.url}></img>
                    </div>
                    <div className='tile-text'>
                        <p>{product.productname}</p>
                        <p>${product.price}.00</p>
                    </div>
                </div>)}
        </div>
    )
}

export default TilesContainer;