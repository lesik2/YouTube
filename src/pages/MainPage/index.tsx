import React from 'react';
import Header from '@components/Header/index';
import Categories from '@components/Categories/index';
import FilmsContainer from '@components/FilmsContainer/index';
import Footer from '@components/Footer/index';
import { useAppSelector } from '@hooks/redux';
import { Wrapper } from './styled';

const MainPage: React.FC = () => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    return (
        <Wrapper data-cy="main-page" $DarkTheme={isDarkTheme}>
            <Header />
            <Categories />
            <FilmsContainer />
            <Footer />
        </Wrapper>
    );
};
export default MainPage;
