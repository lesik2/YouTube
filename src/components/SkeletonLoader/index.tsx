import React from 'react';

import {
    AuthorYear,
    FilmInfo,
    FilmInfoWrapper,
    FilmName,
    ImageAccountWrapper,
    ImageFilmWrapper,
    Wrapper,
} from './styled';
const SkeletonLoader = () => {
    return (
        <Wrapper>
            <ImageFilmWrapper />
            <FilmInfoWrapper>
                <ImageAccountWrapper />
                <FilmInfo>
                    <FilmName />
                    <AuthorYear />
                </FilmInfo>
            </FilmInfoWrapper>
        </Wrapper>
    );
};
export default SkeletonLoader;
