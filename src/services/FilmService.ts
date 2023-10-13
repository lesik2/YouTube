import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm } from '../models/IFilm';
interface IParams {
    page: number;
    ['genres.name']: string | undefined;
    limit: number;
}
interface IResult {
    docs: IFilm[];
    page: number;
    limit: number;
}
export const FilmAPI = createApi({
    reducerPath: 'FilmAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
    endpoints: (build) => ({
        fetchAllFilms: build.query<IResult, IParams>({
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
    }),
});
