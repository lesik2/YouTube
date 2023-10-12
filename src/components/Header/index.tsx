import React, { useId } from 'react';
import {
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
const Header: React.FC = () => {
    const id = useId();
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const dispatch = useAppDispatch();
    const handleOnChange = () => {
        dispatch(changeTheme());
    };
    return (
        <Wrapper>
            <LogoWrapper>
                <img src={labelIcon} alt="modsen film logo" />
                <LogoTitle>ModsenFilms</LogoTitle>
            </LogoWrapper>
            <SearchWrapper>
                <SearchInput placeholder="Search" />
                <SearchButton>
                    <img src={searchIcon} alt="search icon" />
                </SearchButton>
            </SearchWrapper>
            <ToggleTheme onChange={handleOnChange} checked={isDarkTheme} type="checkbox" id={`${id}-themeInput`} />
            <ToggleThemeLabel className="theme-label" htmlFor={`${id}-themeInput`}>
                <ThemeBowl className="theme-bowl" />
            </ToggleThemeLabel>
        </Wrapper>
    );
};
export default Header;
