import styled from 'styled-components';
import { MAX_WIDTH_MOBILE } from '../../constants/index';
export const Wrapper = styled.section<{ $DarkTheme?: boolean }>`
    width: 100%;
    border-top: 1px solid ${(props) => (props.$DarkTheme ? '#ffffff' : 'rgba(0, 0, 0, 0.4)')};
    padding: 29px 18px 0px 0px;
    @media (max-width: 520px) {
        padding: 8px 17px 8px 14px;
    }
`;
export const WrapperInfo = styled.div`
    height: 199px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 42px;
    @media (max-width: 750px) {
        height: 100%;
    }
    @media (max-width: ${MAX_WIDTH_MOBILE}) {
        gap: 31px;
    }
`;
export const TextLeft = styled.p<{ $DarkTheme?: boolean }>`
    margin: 0;
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : 'rgba(0, 0, 0, 0.83)')};
    font-family: medium;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 293px;
    @media (max-width: 520px) {
        font-size: 17px;
    }
    @media (max-width: 320px) {
        font-size: 14px;
    }
`;
export const TextRight = styled.p<{ $DarkTheme?: boolean }>`
    margin: 0;
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : 'rgba(0, 0, 0, 0.83)')};
    font-family: medium;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 254px;
    @media (max-width: 520px) {
        font-size: 17px;
    }
    @media (max-width: ${MAX_WIDTH_MOBILE}) {
        width: 190px;
    }
    @media (max-width: 320px) {
        font-size: 14px;
        width: 170px;
    }
`;
export const WrapperText = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 32px;
    margin-left: 44px;
    margin-top: 36px;
    @media (max-width: 750px) {
        flex-direction: column-reverse;
    }
    @media (max-width: 520px) {
        margin-left: 0px;
        margin-top: 0px;
    }
`;
export const FooterText = styled.h3<{ $DarkTheme?: boolean }>`
    color: ${(props) => (props.$DarkTheme ? '#F0F0F0' : 'rgba(0, 0, 0, 0.4)')};
    font-family: medium;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    align-self: center;
    @media (max-width: 520px) {
        font-size: 18px;
    }
    @media (max-width: 320px) {
        font-size: 12px;
    }
`;
export const WrapperLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 27px;
    position: absolute;
    top: 33px;
    right: 0px;
    @media (max-width: ${MAX_WIDTH_MOBILE}) {
        position: static;
        align-self: center;
    }
`;
export const ImageWrapper = styled.div`
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition:
        transform 0.3s,
        filter 0.3s;
    &:hover {
        transform: scale(1.5);
        filter: invert(76%) sepia(56%) saturate(5908%) hue-rotate(359deg) brightness(100%) contrast(102%);
    }
`;
