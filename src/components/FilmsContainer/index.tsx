import React, { useEffect, useState } from 'react';
import { Button, Wrapper, FilmWrapper, Error } from './styled';
import { useFetchAllFilmsQuery } from '@services/FilmService';
import Film from '../Film/index';
import SkeletonLoader from '../SkeletonLoader';
import { useAppSelector } from '@hooks/redux';
import InfinityLoader from '../InfinityLoader/index';
import { DEFAULT_POSTER, SRC, FILMS_PER_PAGE, ERROR_MESSAGE } from '@constants/index';
import { IFilm } from '../../models/IFilm';
import NotFound from '../NotFound';

const FilmsContainer = () => {
    const [limit, setLimit] = useState(FILMS_PER_PAGE);
    const categoryState = useAppSelector((state) => state.filterParamsReducer.category);
    const searchState = useAppSelector((state) => state.filterParamsReducer.search);
    const { data, isLoading, error, isFetching } = useFetchAllFilmsQuery({
        page: 1,
        limit: limit,
        'genres.name': categoryState === 'All' || categoryState === '' ? undefined : categoryState,
        search: searchState,
    });
    useEffect(() => {
        setLimit(FILMS_PER_PAGE);
    }, [categoryState]);
    const handleClick = () => {
        setLimit((prev) => prev + FILMS_PER_PAGE);
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
        <Wrapper data-testid="films-container">
            <FilmWrapper data-testid="film-wrapper" className="film-wrapper">
                {(isLoading || isFetching) &&
                    limit === FILMS_PER_PAGE &&
                    Array(FILMS_PER_PAGE)
                        .fill('')
                        .map((item, index) => <SkeletonLoader key={index} />)}
                {data?.docs &&
                    data.docs.map((film, index) => (
                        <Film
                            data-cy={`${index}-film`}
                            id={film.id}
                            key={film.id}
                            title={film.enName ?? film.name}
                            image={film.poster === undefined ? DEFAULT_POSTER : film.poster.url}
                            year={film.year}
                            director={film.persons[0].enName ?? film.persons[0].name}
                            video={getSrcForVideo(film)}
                        />
                    ))}
            </FilmWrapper>
            {data?.docs.length === 0 && <NotFound />}
            {error && <Error>{ERROR_MESSAGE}</Error>}
            {isFetching && limit !== FILMS_PER_PAGE && <InfinityLoader />}
            <Button data-cy="button-films" onClick={handleClick}>
                Show More
            </Button>
        </Wrapper>
    );
};
export default FilmsContainer;
