import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm } from '../models/IFilm';
export const FilmAPI = createApi({
    reducerPath: 'FilmAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb-top-100-movies.p.rapidapi.com/' }),
    endpoints: (build) => ({
        fetchAllFilms: build.query<IFilm[], number>({
            query: (limit: number = 16) => ({
                url: '',
                headers: {
                    'X-RapidAPI-Key': 'd18637c0c5msh588b83e7e66453cp12d19ajsna5f8204d2159',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
                },
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});
