import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm } from '../models/IFilm';
export interface IParams {
    page: number;
    ['genres.name']: string | undefined;
    limit: number;
}
export interface IResultFilms {
    docs: IFilm[];
    page: number;
    limit: number;
}
export interface IResultCategories {
    name: string;
    slug: string;
}
export const FilmAPI = createApi({
    reducerPath: 'FilmAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
    endpoints: (build) => ({
        fetchAllFilms: build.query<IResultFilms, IParams>({
            query: (param: IParams) => ({
                // eslint-disable-next-line max-len
                url: '/v1.3/movie?selectFields=id%20enName%20year%20persons.enName%20persons.name%20page%20limit%20poster.url%20name%20videos.trailers.url',
                headers: {
                    accept: 'application/json',
                    'X-API-KEY': '7V3T0KW-YNMM2QY-JKD4755-CXZB0J9',
                },
                params: {
                    [param['genres.name'] === undefined ? 'genre' : 'genres.name']: param['genres.name'],
                    page: param.page,
                    limit: param.limit,
                },
            }),
        }),
        fetchAllCategories: build.query<IResultCategories[], string>({
            query: () => ({
                url: '/v1/movie/possible-values-by-field?field=genres.name',
                headers: {
                    'X-API-KEY': '7V3T0KW-YNMM2QY-JKD4755-CXZB0J9',
                    accept: 'application/json',
                },
            }),
        }),
    }),
});
