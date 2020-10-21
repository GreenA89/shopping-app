import React from 'react';
import './cart.css';
import { ReactComponent as CartSvg} from './cart.svg';
import { ReactComponent as FavouritesSvg} from './favourites.svg';
import { ReactComponent as SearchSvg } from './search.svg';

const Cart = () => {
    return (
        <div className='cart'>
            <a className='nav-svg search-svg'><SearchSvg /></a>
            <a className='nav-svg cart-svg'><CartSvg /></a>
            <a className='nav-svg favourite-svg'><FavouritesSvg /></a>
        </div>
    )
}

export default Cart;