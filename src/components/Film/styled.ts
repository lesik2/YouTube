import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 332px;
    height: 283px;
    display: flex;
    flex-direction: column;
`;
export const ImageFilmWrapper = styled.div<{ $image?: string }>`
    width: 332px;
    height: 186px;
    background: url(${(props) => props.$image}) no-repeat;
    background-size: cover;
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
export const FilmName = styled.h3<{ $DarkTheme?: boolean }>`
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000')};
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    margin: 0;
    font-weight: 400;
`;
export const AuthorYear = styled.div`
    display: flex;
    align-item: center;
`;
export const Author = styled.p<{ $DarkTheme?: boolean }>`
    margin: 0;
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000')};
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
`;
export const Year = styled.p<{ $DarkTheme?: boolean }>`
    margin: 0;
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000')};
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
`;
