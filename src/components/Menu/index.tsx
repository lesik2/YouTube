import React from 'react';
import { IMenu } from '@customTypes/index';
import { useAppSelector } from '@hooks/redux';

import { Content, Wrapper } from './styled';

const Menu: React.FC<IMenu> = ({ children, isOpen, setIsOpen }) => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const closeMenu = () => {
        setIsOpen(false);
    };
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };
    return (
        <Wrapper onClick={closeMenu} $isOpen={isOpen}>
            <Content onClick={handleClick} $isDarkTheme={isDarkTheme} $isOpen={isOpen}>
                {children}
            </Content>
        </Wrapper>
    );
};
export default Menu;
