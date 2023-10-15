import React from 'react';
import { Line, Wrapper } from './styled';
import { useAppSelector } from '../../hooks/redux';
interface IBurgerMenu {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
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