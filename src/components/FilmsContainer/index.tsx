import React from 'react';
import { Button, Wrapper, FilmWrapper } from './styled';
import { FilmAPI } from '../../services/FilmService';
import Film from '../Film/index';

const FilmsContainer = () => {
    const { data: films } = FilmAPI.useFetchAllFilmsQuery(16);
    return (
        <Wrapper>
            <FilmWrapper>
                {films
                    ?.slice(0, 16)
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
