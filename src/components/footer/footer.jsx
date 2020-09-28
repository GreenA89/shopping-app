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
                <div className='column margin-top'>
                    <span className='font-dark'><p>NEWSLETTER SIGN UP</p></span>
                    <span className='wide'><input type='email' placeholder='Enter your email' required className='input' ></input><button className='sign-up font-light'>SIGN UP</button></span>
                    <span className='span'><input type="checkbox"></input><p>Receive news about Poketo Los Angeles?</p></span>
                </div>
                <div className='column socials'>
                    <p className='font-dark padding-bottom'>SOCIAL LINKS</p>
                    <span className='padding-bottom'>
                        <button className='social'><img src={Twitter} alt=''></img></button>
                        <button className='social'><img src={Facebook} alt=''></img></button>
                        <button className='social'><img src={Pinterest} alt=''></img></button>
                        <button className='social'><img src={Instagram} alt=''></img></button>
                    </span>
                    <p className='font-lighter'>Don't forget to follow us!</p>
                </div>
                <div className='copyright column'>
                    <p>Copyright © 2020 <span className='underline'>Poketo</span></p>
                </div>
            </div>
            <div className='column'>

            </div>
        </div>
    )
}

export default Footer;