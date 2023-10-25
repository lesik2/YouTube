import { THEME_PROVIDER } from '@constants/index';
import styled from 'styled-components';
export const Wrapper = styled.section<{ $DarkTheme?: boolean }>`
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 130px;
    gap: 10px;
    border-top: 1px solid ${(props) => (props.$DarkTheme ? THEME_PROVIDER.WHITE : 'rgba(0, 0, 0, 0.19)')};
    border-bottom: 1px solid ${(props) => (props.$DarkTheme ? THEME_PROVIDER.WHITE : 'rgba(0, 0, 0, 0.19)')};
    @media (max-width: 870px) {
        padding-left: 0px;
    }
    @media (max-width: 670px) {
        border: none;
        margin-top: 13px;
        flex-wrap: wrap;
        justify-content: start;
        padding-left: 14px;
        height: 100%;
        gap: 6px;
    }
    @media (max-width: 360px) {
        overflow: auto;
        max-height: 66px;
    }
`;
export const AllFilmsLink = styled.a<{ $active?: boolean }>`
    width: 52px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    user-select: none;
    background-color: ${(props) => (props.$active ? THEME_PROVIDER.BLACK : THEME_PROVIDER.GRAY_LIGHTER)};
    color: ${(props) => (props.$active ? THEME_PROVIDER.WHITE_DARK : THEME_PROVIDER.BLACK)};
    &:hover {
        color: ${(props) => (props.$active ? THEME_PROVIDER.WHITE_DARK : THEME_PROVIDER.BLACK)};
        text-decoration: none;
        background-color: ${(props) => (props.$active ? THEME_PROVIDER.BLACK : THEME_PROVIDER.GRAY_LIGHT)};
        transition: background 0.2s;
    }
`;
export const CategoryLink = styled.a<{ $active?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    width: 91px;
    height: 30px;
    user-select: none;
    background-color: ${(props) => (props.$active ? THEME_PROVIDER.BLACK : THEME_PROVIDER.GRAY_LIGHTER)};
    color: ${(props) => (props.$active ? THEME_PROVIDER.WHITE_DARK : THEME_PROVIDER.BLACK)};
    transition: background 0.2s;
    &:hover {
        color: ${(props) => (props.$active ? THEME_PROVIDER.WHITE_DARK : THEME_PROVIDER.BLACK)};
        text-decoration: none;
        background-color: ${(props) => (props.$active ? THEME_PROVIDER.BLACK : THEME_PROVIDER.GRAY_LIGHT)};
    }
`;
export const Error = styled.h1`
    user-select: none;
    text-align: center;
`;
