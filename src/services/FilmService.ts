import { IParams, IResultCategories, IResultFilms, IResultNames } from '@customTypes/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ENGLISH_PATTERN } from '../constants';
export const FilmAPI = createApi({
    reducerPath: 'FilmAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.DOMAIN }),
    refetchOnFocus: true,
    endpoints: (build) => ({
        fetchAllFilms: build.query<IResultFilms, IParams>({
            query: (param: IParams) => ({
                // eslint-disable-next-line max-len
                url: process.env.FILMS_PATH || '',
                headers: {
                    accept: 'application/json',
                    'X-API-KEY': process.env.API_KEY,
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
                url: process.env.CATEGORIES_PATH || '',
                headers: {
                    'X-API-KEY': process.env.API_KEY,
                    accept: 'application/json',
                },
            }),
        }),
        fetchAllNames: build.query<{ enName: string; name: string }[], string>({
            query: (param: string) => ({
                url: process.env.NAMES_PATH || '',
                headers: {
                    'X-API-KEY': process.env.API_KEY,
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
