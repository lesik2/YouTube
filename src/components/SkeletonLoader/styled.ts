import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 332px;
    height: 283px;
    display: flex;
    flex-direction: column;
`;
export const ImageFilmWrapper = styled.div`
    width: 332px;
    height: 186px;
    background-color: #999999;
`;
export const FilmInfoWrapper = styled.div`
    display: flex;
    width: 332px;
    height: 84px;
    position: relative;
    padding-top: 12px;
`;
export const ImageAccountWrapper = styled.div`
    width: 36px;
    height: 36px;
    position: absolute;
    top: 12px;
    left: 0;
    border-radius: 50%;
    background-color: #999999;
`;
export const FilmInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 260px;
    align-items: flex-start;
    gap: 4px;
    height: 58px;
    margin: 13px 24px 13px 48px;
`;
export const FilmName = styled.div`
    width: 260px;
    height: 22px;
    background-color: #999999;
`;
export const AuthorYear = styled.div`
    width: 260px;
    height: 36px;
    background-color: #999999;
`;
