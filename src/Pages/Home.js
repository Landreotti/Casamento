import React, {useState} from 'react';
import HomeContent from '../Components/Mid/Home/HMCenterContent';
import Header from '../Components/Top/header';
import '../assets/Css/Pages/home.scss';

const Home = () => {
    
    return(
        <>
        <Header/>
        <div className="WrapperContent">
            <HomeContent/>
            
        </div>
        </>
    )

}

export default Home;