import styled from 'styled-components';

import { MAX_WIDTH_TABLET } from '../../constants/index';
export const Wrapper = styled.section`
    padding: 0px 8px;
    display: flex;
    align-items: center;
    min-height: 68px;
    justify-content: space-between;
    @media (max-width: ${MAX_WIDTH_TABLET}) {
        flex-direction: column;
        padding: 0px 20px;
        gap: 16px;
    }
`;
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    @media (max-width: ${MAX_WIDTH_TABLET}) {
        gap: 0.3px;
    }
`;
export const LogoTitle = styled.h2<{ $DarkTheme?: boolean }>`
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000000')};
    font-family: bold;
    font-size: 18px;
    font-style: normal;
    line-height: normal;
    margin: 0;
`;
export const BurgerWrapper = styled.div`
    @media (max-width: ${MAX_WIDTH_TABLET}) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 51px;
    }
`;
