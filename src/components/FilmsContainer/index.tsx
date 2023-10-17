import React, { useEffect, useState } from 'react';
import { Button, Wrapper, FilmWrapper, Error } from './styled';
import { FilmAPI } from '@services/FilmService';
import Film from '../Film/index';
import SkeletonLoader from '../SkeletonLoader';
import { useAppSelector } from '@hooks/redux';
import InfinityLoader from '../InfinityLoader/index';
import { DEFAULT_POSTER, SRC } from '@constants/index';
import { IFilm } from '@models/IFilm';
import NotFound from '../NotFound';

const FilmsContainer = () => {
    const [limit, setLimit] = useState(16);
    const categoryState = useAppSelector((state) => state.filterParamsReducer.category);
    const searchState = useAppSelector((state) => state.filterParamsReducer.search);
    const {
        data: films,
        isLoading,
        error,
        isFetching,
    } = FilmAPI.useFetchAllFilmsQuery({
        page: 1,
        limit: limit,
        'genres.name': categoryState === 'All' || categoryState === '' ? undefined : categoryState,
        search: searchState,
    });
    useEffect(() => {
        setLimit(16);
    }, [categoryState]);
    const handleClick = () => {
        setLimit((prev) => prev + 16);
    };
    const getSrcForVideo = (film: IFilm) => {
        if (!film.videos) {
            return SRC;
        }
        let result: string = '';
        for (let i = 0; i < film.videos.trailers.length; i += 1) {
            if (film.videos.trailers[i]) {
                result = film.videos.trailers[i].url;
                break;
            }
        }
        return result === '' ? SRC : result;
    };
    return (
        <Wrapper>
            <FilmWrapper>
                {(isLoading || isFetching) &&
                    limit === 16 &&
                    Array(16)
                        .fill('')
                        .map((item, index) => <SkeletonLoader key={index} />)}
                {films?.docs &&
                    films.docs.map((film) => (
                        <Film
                            key={film.id}
                            title={film.enName ?? film.name}
                            image={film.poster === undefined ? DEFAULT_POSTER : film.poster.url}
                            year={film.year}
                            director={film.persons[0].enName ?? film.persons[0].name}
                            video={getSrcForVideo(film)}
                        />
                    ))}
            </FilmWrapper>
            {films?.docs.length === 0 && <NotFound />}
            {error && <Error>Something went wrong</Error>}
            {isFetching && limit !== 16 && <InfinityLoader />}
            <Button onClick={handleClick}>Show More</Button>
        </Wrapper>
    );
};
export default FilmsContainer;
