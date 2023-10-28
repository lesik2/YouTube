import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { FilmAPI } from '@//services/filmService';

import filterParamsReducer from './reducers/filterParamsSlice';
import themeReducer from './reducers/themeSlice';

const rootReducer = combineReducers({
    themeReducer,
    filterParamsReducer,
    [FilmAPI.reducerPath]: FilmAPI.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(FilmAPI.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
