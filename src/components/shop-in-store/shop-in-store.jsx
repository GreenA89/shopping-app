import React from 'react';
import shopInStoreList from './shop-in-store-list';
import './shop-in-store.css';

const ShopInStore = () => {
    return (
        <div className='shop-in-store'>
            <div className='shop-in-store-container'>
                <h1 className='shop-appointment'>Shop Appointment</h1>
                <img className='image' src='https://cdn.shopify.com/s/files/1/0001/5211/files/poketo_shop.jpg?v=1597706978'></img>
                <p>As we continue doing curb-side pick ups, we are now open for in-person shopping:</p>
                <p><b>Poketo Little Tokyo</b>, 374 E. 2nd Street, LA, CA 90012: Sunday-Friday 11am-4pm, Saturday 12-5pm, Tuesday Closed</p>
                <p><b>Poketo at ROWDTLA</b>, 777 S. Alameda Street #174, Los Angeles, CA 90021, Friday-Sunday 12-5pm</p>
                <p><b><a className='underline link'>Click to book</a> a personal shopping experience with us for Little Tokyo Location only.</b></p>
                <p><b>First please follow below directions: </b></p>
                <ul>
                    {shopInStoreList.map(listItem => <li className='list-item'>{listItem}</li>)}
                </ul>
                <p><b>If you have any questions, call us at 213-537-0751.</b></p>
            </div>
        </div>
    )
}

export default ShopInStore;