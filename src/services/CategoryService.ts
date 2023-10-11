import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CategoryAPI = createApi({
    reducerPath: 'CategoryAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ott-details.p.rapidapi.com' }),
    endpoints: (build) => ({
        fetchAllCategories: build.query<string[], string>({
            query: (genre: string = 'genre') => ({
                url: '/getParams',
                headers: {
                    'X-RapidAPI-Key': '09aa243800mshd807ebe4ccdf6fcp1824bejsne6d06447657f',
                    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
                },
                params: {
                    param: genre,
                },
            }),
        }),
    }),
});
