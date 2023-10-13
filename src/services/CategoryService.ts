import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CategoryAPI = createApi({
    reducerPath: 'CategoryAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ott-details.p.rapidapi.com' }),
    endpoints: (build) => ({
        fetchAllCategories: build.query<string[], string>({
            query: (genre: string = 'genre') => ({
                url: '/getParams',
                headers: {
                    'X-RapidAPI-Key': 'd18637c0c5msh588b83e7e66453cp12d19ajsna5f8204d2159',
                    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
                },
                params: {
                    param: genre,
                },
            }),
        }),
    }),
});
