import React, { useEffect, useState } from 'react';
import { Button, Wrapper, FilmWrapper } from './styled';
import { FilmAPI } from '../../services/FilmService';
import Film from '../Film/index';
import SkeletonLoader from '../SkeletonLoader';
import { useAppSelector } from '../../hooks/redux';
import InfinityLoader from '../InfinityLoader/index';
import SRC from '../../constants/index';
import { IFilm } from '@/models/IFilm';

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
                            video={getSrcForVideo(film)}
                        />
                    ))}
            </FilmWrapper>
            {error && <h1>Something went wrong</h1>}
            {isFetching && limit !== 16 && <InfinityLoader />}
            <Button onClick={handleClick}>Show More</Button>
        </Wrapper>
    );
};
export default FilmsContainer;
