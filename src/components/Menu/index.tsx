import React from 'react';
import { Wrapper } from './styled';
import { useAppSelector } from '../../hooks/redux';
interface IMenu {
    children: React.ReactNode;
    isOpen: boolean;
}
const Menu: React.FC<IMenu> = ({ children, isOpen }) => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    return (
        <>
            <Wrapper $isOpen={isOpen} $isDarkTheme={isDarkTheme}>
                {children}
            </Wrapper>
        </>
    );
};
export default Menu;
