import styled from 'styled-components';

import { MAX_WIDTH_TABLET } from '../../constants/index';

export const Wrapper = styled.div<{ $isOpen?: boolean }>`
    @media (max-width: ${MAX_WIDTH_TABLET}) {
        position: fixed;
        top: 0px;
        right: ${(props) => (props.$isOpen ? '0px' : '-100%')};
        width: 100%;
        height: 100vh;
        transition: right 0.5s;
        z-index: 900;
    }
`;
export const Content = styled.div<{ $isDarkTheme?: boolean; $isOpen?: boolean }>`
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
