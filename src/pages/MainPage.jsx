import React from 'react';
import NavBar from '../componant/NavBar';
import HomeSection from './HomeSection';
import StoreSection from './StoreSection';

const MainPage = () => {
    return (
        <>
            <NavBar />
            <HomeSection></HomeSection>
            <StoreSection></StoreSection>
        </>
    );
};

export default MainPage;