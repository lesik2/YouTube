import styled from 'styled-components';
import { MAX_WIDTH_TABLET } from '../../constants/index';

export const Wrapper = styled.div<{ $isOpen?: boolean; $isDarkTheme?: boolean }>`
    display: none;
    z-index: 2000;
    width: 23.5px;
    height: 23.5px;
    padding: 6px 4px 6px 4px;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
        background-color: #bfbfbf;
    }
    &::before {
        content: '';
        position: absolute;
        top: ${(props) => (props.$isOpen ? '10.8px' : '6px')};
        width: 15.5px;
        background: ${(props) => (props.$isDarkTheme ? '#ffffff' : '#000000')};
        height: 2px;
        border-radius: 1px;
        transition:
            transform 0.3s,
            top 0.3s;
        transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : 'none')};
    }
    &::after {
        content: '';
        position: absolute;
        bottom: ${(props) => (props.$isOpen ? '10.8px' : '6px')};
        width: 15.5px;
        background: ${(props) => (props.$isDarkTheme ? '#ffffff' : '#000000')};
        height: 2px;
        border-radius: 1px;
        transition:
            transform 0.3s,
            bottom 0.3s;
        transform: ${(props) => (props.$isOpen ? 'rotate(-45deg)' : 'none')};
    }
    @media (max-width: ${MAX_WIDTH_TABLET}) {
        display: block;
    }
`;
export const Line = styled.span<{ $isOpen?: boolean; $isDarkTheme?: boolean }>`
    position: absolute;
    top: 10.8px;
    width: 15.5px;
    background: ${(props) => (props.$isDarkTheme ? '#ffffff' : '#000000')};
    height: 2px;
    border-radius: 1px;
    transition: transform 0.3s;
    transform: ${(props) => (props.$isOpen ? 'scale(0)' : 'scale(1)')};
`;
