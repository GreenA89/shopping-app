import React from 'react';
import './custom.css';

import CustomOne from './custom-one/custom-one';
import CustomTwo from './custom-two/custom-two';
import CustomThree from './custom-three/custom-three';

const Custom = () => {
    return (
        <div className='custom'>
            <CustomOne />
            <CustomTwo />
            <CustomThree />
        </div>
    )
};

export default Custom;