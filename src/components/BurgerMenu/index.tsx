import React from 'react';
import { IBurgerMenu } from '@customTypes/index';
import { useAppSelector } from '@hooks/redux';

import { Line, Wrapper } from './styled';
const BurgerMenu: React.FC<IBurgerMenu> = ({ isOpen, setIsOpen }) => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <Wrapper $isOpen={isOpen} $isDarkTheme={isDarkTheme} onClick={handleClick}>
            <Line $isOpen={isOpen} $isDarkTheme={isDarkTheme} />
        </Wrapper>
    );
};
export default BurgerMenu;
