import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/ThemeSlice';
import filterParamsReducer from './reducers/FilterParamsSlice';
import { FilmAPI } from '@services/FilmService';
import { setupListeners } from '@reduxjs/toolkit/query';

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
