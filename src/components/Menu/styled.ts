import { MAX_WIDTH_TABLET } from '../../constants/index';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $isOpen?: boolean; $isDarkTheme?: boolean }>`
    @media (max-width: ${MAX_WIDTH_TABLET}) {
        position: fixed;
        top: 0px;
        right: ${(props) => (props.$isOpen ? '0px' : '-100%')};
        width: 320px;
        height: 100vh;
        background-color: ${(props) => (props.$isDarkTheme ? '#363d49' : '#f2f2f2')};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: right 0.5s;
        z-index: 1000;
    }
    @media (max-width: 320px) {
        width: 100%;
    }
`;
