// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import { DEFAULT_POSTER, FILMS_PER_PAGE, MESSAGES, SRC, STATIC_INFO } from '@constants/index';
import { useAppSelector } from '@hooks/redux';
import { useFetchAllFilmsQuery } from '@services/filmService';

import { IFilm } from '../../models/iFilm';
import Film from '../Film/index';
import InfinityLoader from '../InfinityLoader/index';
import NotFound from '../NotFound';
import SkeletonLoader from '../SkeletonLoader';

import { Button, Error, FilmWrapper, Wrapper } from './styled';

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
                        // eslint-disable-next-line react/no-array-index-key
                        .map((item, index) => <SkeletonLoader key={index} />)}
                {data &&
                    data.docs.map((film, index) => (
                        <Film
                            data-cy={`${index}-film`}
                            id={film.id}
                            key={film.id}
                            title={film.enName ?? film.name}
                            image={film.poster === undefined ? DEFAULT_POSTER : film.poster.url}
                            year={film.year}
                            director={
                                !film.persons.length
                                    ? STATIC_INFO.INCOGNITO_PERSON
                                    : film.persons[0].enName ?? film.persons[0].name
                            }
                            video={getSrcForVideo(film)}
                        />
                    ))}
            </FilmWrapper>
            {data?.docs.length === 0 && <NotFound />}
            {error && <Error>{MESSAGES.ERROR_MESSAGE}</Error>}
            {isFetching && limit !== FILMS_PER_PAGE && <InfinityLoader />}
            {data && data?.docs.length !== 0 && data.total > limit && (
                <Button data-cy="button-films" onClick={handleClick}>
                    {STATIC_INFO.BUTTON_SHOW_MORE}
                </Button>
            )}
        </Wrapper>
    );
};
export default FilmsContainer;
