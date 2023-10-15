import React, { useMemo, useState } from 'react';
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
    director: string;
    title: string;
    video: string;
}
import { useAppSelector } from '../../hooks/redux';
import Modal from '../Modal/index';
const Film: React.FC<IFilmComponent> = ({ image, year, director, title, video }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const getRandomIcon = useMemo(() => {
        const imageList = images.keys().map((image) => images(image));
        const random = Math.floor(Math.random() * imageList.length);
        return imageList[random];
    }, [image, year, director, title, video]);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <Wrapper>
            <ImageFilmWrapper $image={image} onClick={handleOpen} />
            <FilmInfoWrapper>
                <ImageAccountWrapper>
                    <img src={getRandomIcon} alt="icon of account" />
                </ImageAccountWrapper>
                <FilmInfo>
                    <FilmName $DarkTheme={isDarkTheme}>{title}</FilmName>
                    <AuthorYear>
                        <Author $DarkTheme={isDarkTheme}>{director} • </Author>
                        <Year $DarkTheme={isDarkTheme}>{year}</Year>
                    </AuthorYear>
                </FilmInfo>
            </FilmInfoWrapper>
            {isOpen && <Modal src={video} onClose={handleClose} />}
        </Wrapper>
    );
};
export default Film;
