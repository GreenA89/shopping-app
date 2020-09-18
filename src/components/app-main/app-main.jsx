import React, { useState } from 'react';
import '../app-main/app-main.css';
import NavBar from '../nav-bar/nav-bar';


const AppMain = () => {

    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [toggleSection, setToggleSection] = useState(0);
    
    const handleToggleTrue = (x) => {
        setToggleDropDown(true);
        setToggleSection(x)
    }

    const handleToggleFalse = () => {
        setToggleDropDown(false);
    }

    return (
        <div className='app-main' >
            <NavBar 
                handleToggleTrue={handleToggleTrue} 
                handleToggleFalse={handleToggleFalse} 
                toggleDropDown={toggleDropDown}
                toggleSection={toggleSection}
            /> 
        </div>
    )
}

export default AppMain;