import React from 'react';
import { Button, Wrapper, FilmWrapper } from './styled';
import { FilmAPI } from '../../services/FilmService';
import Film from '../Film/index';
import SkeletonLoader from '../SkeletonLoader';

const FilmsContainer = () => {
    const { data: films, isLoading, error } = FilmAPI.useFetchAllFilmsQuery(16);
    return (
        <Wrapper>
            <FilmWrapper>
                {error && <h1>Something went wrong</h1>}
                {isLoading &&
                    Array(16)
                        .fill('')
                        .map((item, index) => <SkeletonLoader key={index} />)}
                {films &&
                    films
                        .slice(0, 16)
                        .map((film) => (
                            <Film
                                key={film.id}
                                title={film.title}
                                image={film.image}
                                year={film.year}
                                director={film.genre}
                            />
                        ))}
            </FilmWrapper>
            <Button>Show More</Button>
        </Wrapper>
    );
};
export default FilmsContainer;
