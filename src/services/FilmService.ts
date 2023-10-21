import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm } from '@models/IFilm';
export interface IParams {
    page: number;
    ['genres.name']: string | undefined;
    limit: number;
    search: string;
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
export interface IResultNames {
    docs: { enName: string }[];
    total: number;
    page: number;
    limit: number;
    pages: number;
}
const API_KEY = 'HPA43BP-EBE4V0V-QSZH713-K5WHQXX';
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
                    'X-API-KEY': API_KEY,
                },
                params: {
                    [param['genres.name'] === undefined ? '' : 'genres.name']: param['genres.name'],
                    [param.search === '' ? '' : 'enName']: param.search,
                    page: param.page,
                    limit: param.limit,
                },
            }),
        }),
        fetchAllCategories: build.query<IResultCategories[], string>({
            query: () => ({
                url: '/v1/movie/possible-values-by-field?field=genres.name',
                headers: {
                    'X-API-KEY': API_KEY,
                    accept: 'application/json',
                },
            }),
        }),
        fetchAllNames: build.query<IResultNames, string>({
            query: (param: string) => ({
                url: '/v1.3/movie?selectFields=enName&page=1&limit=10',
                headers: {
                    'X-API-KEY': API_KEY,
                    accept: 'application/json',
                },
                params: {
                    enName: param,
                },
            }),
        }),
    }),
});
export const { useFetchAllCategoriesQuery, useFetchAllFilmsQuery, useFetchAllNamesQuery } = FilmAPI;
