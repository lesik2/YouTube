import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/ThemeSlice';
import filterParamsReducer from './reducers/FilterParamsSlice';
import { FilmAPI } from '@services/FilmService';

const rootReducer = combineReducers({
    themeReducer,
    filterParamsReducer,
    [FilmAPI.reducerPath]: FilmAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(FilmAPI.middleware),
    });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
