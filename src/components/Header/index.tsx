import React, { useState } from 'react';
import labelIcon from '@assets/icons/labelIcon.svg';
import { useAppSelector } from '@hooks/redux';

import BurgerMenu from '../BurgerMenu';
import Menu from '../Menu';
import SearchFilm from '../SearchFilm';
import ToggleTheme from '../ToggleTheme/index';

import { BurgerWrapper, LogoTitle, LogoWrapper, Wrapper } from './styled';
const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);

    return (
        <Wrapper>
            <BurgerWrapper>
                <LogoWrapper>
                    <img src={labelIcon} alt="modsen film logo" />
                    <LogoTitle $DarkTheme={isDarkTheme}>ModsenFilms</LogoTitle>
                </LogoWrapper>
                <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </BurgerWrapper>
            <SearchFilm />
            <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
                <ToggleTheme />
            </Menu>
        </Wrapper>
    );
};
export default Header;
