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
import ShopInStore from '../shop-in-store/shop-in-store';
import Modal from '../modal/modal';



const AppMain = () => {

    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [toggleSection, setToggleSection] = useState(0);
    const [category, setCategory] = useState(1);
    const [section, setSection] = useState('store');
    const [sortMethod, setSortMethod] = useState('');
    const [modal, setModal] = useState(false);
    const [focus, setFocus] = useState(false);
    const [current, setCurrent] = useState(0);
    const [modalData, setModalData] = useState({})

    const handleFocus = (x, i) => {
        setFocus(x);
        setCurrent(i);
    }
    
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

    const handleSort = (e) => {
        setSortMethod(e.target.value);
    }

    const handleModal = (product) => {
        setModal(!modal);
        setCurrent(false)
        setFocus(0)
        setModalData(product);
    }

    

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
            {modal && <Modal handleModal={handleModal} data={modalData} />}
            {section === 'store' && <Sort handleSort={handleSort}/>}
            <GreyOut toggleDropDown={toggleDropDown} />
            {section === 'store' && <Header category={category} />}
            {section === 'store' && <TilesContainer sortMethod={sortMethod} handleModal={handleModal} focus={focus} current={current} handleFocus={handleFocus}/>}
            {section === 'shop-in-store' && <ShopInStore />}
            {section === 'custom' && <Custom />}
            {section === 'login' && <Login />}
            <Footer />
        </div>
    )
}

export default AppMain;