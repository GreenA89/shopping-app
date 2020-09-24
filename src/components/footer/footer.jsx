import React from 'react';
import './footer.css';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Pinterest from './pinterest.svg';
import Facebook from './facebook.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='column border-right'>
                <div className='column'>
                    <p>NEWSLETTER SIGN UP</p>
                    <span><input type='email' placeholder='Enter your email'></input><button>SIGN UP</button></span>
                    <span className='span'><input type="checkbox"></input><p>Receive news about Poketo Los Angeles?</p></span>
                </div>
                <div className='column'>
                    <p>SOCIAL LINKS</p>
                    <span>
                        <button className='social'><img src={Twitter}></img></button>
                        <button className='social'><img src={Facebook}></img></button>
                        <button className='social'><img src={Pinterest}></img></button>
                        <button className='social'><img src={Instagram}></img></button>
                    </span>
                    <p>Don't forget to follow us!</p>
                </div>
            </div>
            <div className='column'>

            </div>
        </div>
    )
}

export default Footer;