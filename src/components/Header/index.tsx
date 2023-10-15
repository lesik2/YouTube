import React, { useId, useState } from 'react';
import {
    BurgerWrapper,
    LogoTitle,
    LogoWrapper,
    SearchButton,
    SearchInput,
    SearchWrapper,
    ThemeBowl,
    ToggleTheme,
    ToggleThemeLabel,
    Wrapper,
} from './styled';
import labelIcon from '../../assets/icons/labelIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeTheme } from '../../store/reducers/ThemeSlice';
import BurgerMenu from '../BurgerMenu';
import Menu from '../Menu';
const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const id = useId();
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const dispatch = useAppDispatch();
    const handleOnChange = () => {
        dispatch(changeTheme());
    };
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
                <ToggleTheme onChange={handleOnChange} checked={isDarkTheme} type="checkbox" id={`${id}-themeInput`} />
                <ToggleThemeLabel className="theme-label" htmlFor={`${id}-themeInput`}>
                    <ThemeBowl className="theme-bowl" />
                </ToggleThemeLabel>
            </Menu>
        </Wrapper>
    );
};
export default Header;
