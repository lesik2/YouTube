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
export const ImageFilmWrapper = styled.div`
    width: 332px;
    height: 186px;
    background-color: #999999;
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
    border-radius: 50%;
    background-color: #999999;
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
export const FilmName = styled.div`
    width: 260px;
    height: 22px;
    background-color: #999999;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        width: 183px;
        height: 16px;
    }
`;
export const AuthorYear = styled.div`
    width: 260px;
    height: 36px;
    background-color: #999999;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
      width: 183px;
      height: 20px
  
`;
