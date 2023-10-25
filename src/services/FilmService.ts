import { IParams, IResultCategories, IResultFilms, IResultNames } from '@customTypes/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ENGLISH_PATTERN } from '../constants';

const API_KEY = 'EZ2XK87-S3Z47VY-J7XMKBT-934BD4C';
export const FilmAPI = createApi({
    reducerPath: 'FilmAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
    refetchOnFocus: true,
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
                    [param.search === '' || !ENGLISH_PATTERN.test(param.search) ? '' : 'enName']: param.search,
                    [param.search === '' || ENGLISH_PATTERN.test(param.search) ? '' : 'name']: param.search,
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
        fetchAllNames: build.query<{ enName: string; name: string }[], string>({
            query: (param: string) => ({
                url: '/v1.3/movie?selectFields=enName%20name&page=1&limit=10',
                headers: {
                    'X-API-KEY': API_KEY,
                    accept: 'application/json',
                },
                params: {
                    [!ENGLISH_PATTERN.test(param) ? '' : 'enName']: param,
                    [ENGLISH_PATTERN.test(param) ? '' : 'name']: param,
                },
            }),
            transformResponse: (response: IResultNames) => response.docs,
        }),
    }),
});
export const { useFetchAllCategoriesQuery, useFetchAllFilmsQuery, useFetchAllNamesQuery } = FilmAPI;
