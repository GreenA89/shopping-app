import React, { useState } from 'react';
import '../app-main/app-main.css';
import NavBar from '../nav-bar/nav-bar';
import Sort from '../sort/sort';
import Header from '../header/header';
import TilesContainer from '../tiles-container/tiles-container';
import GreyOut from '../grey-out/grey-out';
import Footer from '../footer/footer';
import Login from '../login/login';
import Custom from '../custom-page/custom';



const AppMain = () => {

    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [toggleSection, setToggleSection] = useState(0);
    const [category, setCategory] = useState(1);
    const [section, setSection] = useState('store');
    
    const handleToggleTrue = (x) => {
        setToggleDropDown(true);
        setToggleSection(x)
    }

    const handleToggleFalse = () => {
        setToggleDropDown(false);
    }

    const handleSetCategory = (index) => {
        setCategory(index);
        setSection('store')
        setToggleDropDown(false);
    }

    const handleSetSection = (section) => {
        setSection(section);
    }

    console.log(section);

    return (
        <div className='app-main' >
            <NavBar 
                handleToggleTrue={handleToggleTrue} 
                handleToggleFalse={handleToggleFalse} 
                toggleDropDown={toggleDropDown}
                toggleSection={toggleSection}
                setCategory={handleSetCategory}
                setSection={handleSetSection}
            /> 
            {section === 'store' && <Sort />}
            <GreyOut toggleDropDown={toggleDropDown} />
            {section === 'store' && <Header category={category} />}
            <TilesContainer />
            {section === 'custom' && <Custom />}
            {section === 'login' && <Login />}
            <Footer />
        </div>
    )
}

export default AppMain;