import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface IResult {
    name: string;
    slug: string;
}
export const CategoryAPI = createApi({
    reducerPath: 'CategoryAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
    endpoints: (build) => ({
        fetchAllCategories: build.query<IResult[], string>({
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
