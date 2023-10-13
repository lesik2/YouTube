import React, { useMemo } from 'react';
import {
    Author,
    AuthorYear,
    FilmInfo,
    FilmInfoWrapper,
    FilmName,
    ImageAccountWrapper,
    ImageFilmWrapper,
    Wrapper,
    Year,
} from './styled';
const images = require.context('../../assets/images', true);
interface IFilmComponent {
    image: string;
    year: number;
    director: string[];
    title: string;
}
import { useAppSelector } from '../../hooks/redux';
const Film: React.FC<IFilmComponent> = ({ image, year, director, title }) => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const getRandomIcon = useMemo(() => {
        const imageList = images.keys().map((image) => images(image));
        const random = Math.floor(Math.random() * imageList.length);
        return imageList[random];
    }, [image, year, director, title]);
    return (
        <Wrapper>
            <ImageFilmWrapper $image={image} />
            <FilmInfoWrapper>
                <ImageAccountWrapper>
                    <img src={getRandomIcon} alt="icon of account" />
                </ImageAccountWrapper>
                <FilmInfo>
                    <FilmName $DarkTheme={isDarkTheme}>{title}</FilmName>
                    <AuthorYear>
                        <Author $DarkTheme={isDarkTheme}>{director[0]} • </Author>
                        <Year $DarkTheme={isDarkTheme}>{year}</Year>
                    </AuthorYear>
                </FilmInfo>
            </FilmInfoWrapper>
        </Wrapper>
    );
};
export default Film;
