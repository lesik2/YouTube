import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CategoryAPI = createApi({
    reducerPath: 'CategoryAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ott-details.p.rapidapi.com' }),
    endpoints: (build) => ({
        fetchAllCategories: build.query<string[], string>({
            query: (genre: string = 'genre') => ({
                url: '/getParams',
                headers: {
                    'X-RapidAPI-Key': 'a674e084bfmsh071d9ba6a80f163p1a7588jsn65e0737cda00',
                    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
                },
                params: {
                    param: genre,
                },
            }),
        }),
    }),
});
