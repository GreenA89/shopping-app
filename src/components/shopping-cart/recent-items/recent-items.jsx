import React from 'react';
import '../shopping-cart.css';

const RecentItems = (props) => {
    return (
        <div className='recent-items-data'>
            <div className='recent-items-title'>
                <h1 className='font recently-viewed'><b>Recently Viewed Products</b></h1>
            </div>
            <div className='items-map'>
                {props.recentItems && props.recentItems.map(item =>
                    <div className='recent-item'>
                        <img src={item.url} alt='item' className='recent-item-image'></img>
                        <h3 className='font recent-item-name'><b>{item.productname}</b></h3>
                        <p className='font recent-item-price'><em>${item.price}.00 USD</em></p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecentItems;