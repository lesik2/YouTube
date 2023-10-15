import styled from 'styled-components';
import { MAX_WIDTH_LAPTOP } from '../../constants/index';

export const Wrapper = styled.div`
    width: 332px;
    height: 283px;
    display: flex;
    flex-direction: column;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        width: 212px;
        height: 202px;
    }
`;
export const ImageFilmWrapper = styled.div<{ $image?: string }>`
    width: 332px;
    height: 186px;
    background: url(${(props) => props.$image}) no-repeat;
    background-size: cover;
    transition:
        transform 0.2s,
        border-radius 0.2s;
    cursor: pointer;
    &:hover {
        transform: scale(1.07);
        border-radius: 12px;
    }
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        width: 212px;
        height: 129px;
    }
`;
export const FilmInfoWrapper = styled.div`
    display: flex;
    width: 332px;
    height: 84px;
    position: relative;
    padding-top: 12px;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        width: 212px;
        height: 63px;
        padding-top: 10px;
    }
`;
export const ImageAccountWrapper = styled.div`
    width: 36px;
    height: 36px;
    position: absolute;
    top: 12px;
    left: 0;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        width: 22.23px;
        height: 27px;
        top: 10px;
    }
`;
export const FilmInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 260px;
    align-items: flex-start;
    gap: 4px;
    height: 58px;
    margin: 13px 24px 13px 48px;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        margin: 2.5px 0px 2.5px 30px;
    }
`;
export const FilmName = styled.h3<{ $DarkTheme?: boolean }>`
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000')};
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    margin: 0;
    font-weight: 400;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        font-size: 14px;
    }
`;
export const AuthorYear = styled.div`
    display: flex;
    align-items: center;
`;
export const Author = styled.p<{ $DarkTheme?: boolean }>`
    margin: 0;
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000')};
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        font-size: 13px;
    }
`;
export const Year = styled.p<{ $DarkTheme?: boolean }>`
    margin: 0;
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000')};
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        font-size: 13px;
    }
`;
