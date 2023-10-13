import React from 'react';
import { Button, Wrapper, FilmWrapper } from './styled';
import { FilmAPI } from '../../services/FilmService';
import Film from '../Film/index';
import SkeletonLoader from '../SkeletonLoader';
import { useAppSelector } from '../../hooks/redux';

const FilmsContainer = () => {
    const categoryState = useAppSelector((state) => state.categoryReducer.category);
    const {
        data: films,
        isLoading,
        error,
        isFetching,
    } = FilmAPI.useFetchAllFilmsQuery({
        page: 1,
        limit: 16,
        'genres.name': categoryState === 'All' ? undefined : categoryState,
    });
    return (
        <Wrapper>
            <FilmWrapper>
                {error && <h1>Something went wrong</h1>}
                {(isLoading || isFetching) &&
                    Array(16)
                        .fill('')
                        .map((item, index) => <SkeletonLoader key={index} />)}
                {films?.docs &&
                    films.docs.map((film) => (
                        <Film
                            key={film.id}
                            title={film.enName ?? film.name}
                            image={film.poster.url}
                            year={film.year}
                            director={film.persons[0].enName ?? film.persons[0].name}
                        />
                    ))}
            </FilmWrapper>
            <Button>Show More</Button>
        </Wrapper>
    );
};
export default FilmsContainer;
