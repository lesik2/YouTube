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
                    'X-RapidAPI-Key': '09aa243800mshd807ebe4ccdf6fcp1824bejsne6d06447657f',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
                },
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});
