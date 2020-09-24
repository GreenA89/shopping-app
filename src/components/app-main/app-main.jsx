import React, { useState } from 'react';
import '../app-main/app-main.css';
import NavBar from '../nav-bar/nav-bar';
import Sort from '../sort/sort';
import Header from '../header/header';
import TilesContainer from '../tiles-container/tiles-container';
import GreyOut from '../grey-out/grey-out';
import Footer from '../footer/footer';



const AppMain = () => {

    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [toggleSection, setToggleSection] = useState(0);
    const [category, setCategory] = useState(1);
    
    const handleToggleTrue = (x) => {
        setToggleDropDown(true);
        setToggleSection(x)
    }

    const handleToggleFalse = () => {
        setToggleDropDown(false);
    }

    const handleSetCategory = (index) => {
        setCategory(index);
        setToggleDropDown(false);
    }

    return (
        <div className='app-main' >
            <NavBar 
                handleToggleTrue={handleToggleTrue} 
                handleToggleFalse={handleToggleFalse} 
                toggleDropDown={toggleDropDown}
                toggleSection={toggleSection}
                setCategory={handleSetCategory}
            /> 
            <Sort />
            <GreyOut toggleDropDown={toggleDropDown} />
            <Header category={category} />
            <TilesContainer />
            <Footer />
        </div>
    )
}

export default AppMain;