import React from 'react';
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
const Film: React.FC<IFilmComponent> = ({ image, year, director, title }) => {
    const getRandomIcon = () => {
        const imageList = images.keys().map((image) => images(image));
        const random = Math.floor(Math.random() * imageList.length);
        return imageList[random];
    };
    return (
        <Wrapper>
            <ImageFilmWrapper $image={image} />
            <FilmInfoWrapper>
                <ImageAccountWrapper>
                    <img src={getRandomIcon()} alt="icon of account" />
                </ImageAccountWrapper>
                <FilmInfo>
                    <FilmName>{title}</FilmName>
                    <AuthorYear>
                        <Author>{director[0]} • </Author>
                        <Year>{year}</Year>
                    </AuthorYear>
                </FilmInfo>
            </FilmInfoWrapper>
        </Wrapper>
    );
};
export default Film;
