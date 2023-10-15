import React, { useState } from 'react';
import { BurgerWrapper, LogoTitle, LogoWrapper, SearchButton, SearchInput, SearchWrapper, Wrapper } from './styled';
import labelIcon from '../../assets/icons/labelIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.svg';
import { useAppSelector } from '../../hooks/redux';
import BurgerMenu from '../BurgerMenu';
import Menu from '../Menu';
import ToggleTheme from '../ToggleTheme/index';
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
            <SearchWrapper>
                <SearchInput placeholder="Search" />
                <SearchButton>
                    <img src={searchIcon} alt="search icon" />
                </SearchButton>
            </SearchWrapper>
            <Menu isOpen={isOpen}>
                <ToggleTheme />
            </Menu>
        </Wrapper>
    );
};
export default Header;
