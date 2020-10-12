import React from 'react';
import './custom-three.css';

const CustomThree = () => {
    return (
        <div className='custom-three'>
            <div className='heading-container'>
                <h3 className='heading'>See our <a className='underline link'>Wallets, Cases</a> and <a className='underline link'>Pins</a> for more ideas!</h3>
                <h3 className='heading'>We've taken care of the templates, layouts and interiors—all you need to do is send us your logo, design and/or color scheme, and together we'll create custom products that will show off your company in a beautiful, memorable way.</h3>
                <h3 className='heading' style={{color: 'red', fontSize: '35px'}}>Interested?</h3>
                <h3 className='heading'>Email <a className='underline link'>custom@poketo.com</a> with your project ideas and we'll get in touch with you about pricing and minimums.</h3>
                <div className='circle'>Start Your Project</div>
            </div>
        </div>
    )
};

export default CustomThree;