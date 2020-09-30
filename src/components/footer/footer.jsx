import React from 'react';
import './footer.css';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Pinterest from './pinterest.svg';
import Facebook from './facebook.svg';
import menuLinks from '../menu-links/menu-links';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='column border-right'>
                <div className='footer-container'>
                    <div className=''>
                        <span><p className='font-dark'>NEWSLETTER SIGN UP</p></span>
                        <span className='wide'><input type='email' placeholder='Enter your email' required className='input' ></input><button className='sign-up font-light'>SIGN UP</button></span>
                        <span className='span'><input type="checkbox"></input><p>Receive news about Poketo Los Angeles?</p></span>
                    </div>
                    <div className='socials'>
                        <p className='font-dark padding-bottom'>SOCIAL LINKS</p>
                        <span className='padding-bottom row'>
                            <a className='social'><img src={Twitter} alt=''></img></a>
                            <a className='social'><img src={Facebook} alt=''></img></a>
                            <a className='social'><img src={Pinterest} alt=''></img></a>
                            <a className='social'><img src={Instagram} alt=''></img></a>
                        </span>
                        <p className='font-lighter'>Don't forget to follow us!</p>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2020 <span className='underline'>Poketo</span></p>
                    </div>
                </div>
            </div>
            <div className='column padding-left'>
                <div className='footer-container'>
                    <div className='wholesale'>
                        <span><p className='font-dark'>WHOLESALE</p></span>
                        <span><a className='underline font-large'>Visit our wholesale site</a></span>
                        <span className='font-lighter'><p>Are you a retailer interested in carrying Poketo products? We have a site just for you.</p></span>
                    </div>
                    <div className='link-container'>
                        <span className='font-dark'><p>FOOTER MENU</p></span>
                        <div className='row links'>
                            {menuLinks.map(link => <a className='link font-light' href='#' >{link}</a>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;