import React from 'react';
import productTypes from '../product-types/product-types';
import './sort.css';

const Sort = () => {
    return (
        <div className='sort'>
            <select className='filter-by-product select' data-label='PRODUCT TYPE'>
                <option selected disabled>PRODUCT TYPE</option>
                {productTypes && productTypes.map((product, key) => <option key={key}>{product}</option>)}
            </select>
            <select className='sort-by select margin-left' data-label='SORT'>
                <option selected disabled>SORT</option>
                <option value='featured'>Featured</option>
                <option value='best-selling'>Best Selling</option>
                <option value='price-low-high'>Price, low to high</option>
                <option value='price-high-low'>Price, high to low</option>
            </select>
        </div>
    )
}

export default Sort;