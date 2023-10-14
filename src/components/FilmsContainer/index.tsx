import React, { useEffect, useState } from 'react';
import { Button, Wrapper, FilmWrapper } from './styled';
import { FilmAPI } from '../../services/FilmService';
import Film from '../Film/index';
import SkeletonLoader from '../SkeletonLoader';
import { useAppSelector } from '../../hooks/redux';
import InfinityLoader from '../InfinityLoader/index';

const FilmsContainer = () => {
    const [limit, setLimit] = useState(16);
    const categoryState = useAppSelector((state) => state.categoryReducer.category);
    const {
        data: films,
        isLoading,
        error,
        isFetching,
    } = FilmAPI.useFetchAllFilmsQuery({
        page: 1,
        limit: limit,
        'genres.name': categoryState === 'All' ? undefined : categoryState,
    });
    useEffect(() => {
        setLimit(16);
    }, [categoryState]);
    const handleClick = () => {
        setLimit((prev) => prev + 16);
    };
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
            {isFetching && limit !== 16 && <InfinityLoader />}
            <Button onClick={handleClick}>Show More</Button>
        </Wrapper>
    );
};
export default FilmsContainer;
