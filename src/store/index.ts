import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/ThemeSlice';
import categoryReducer from './reducers/CategorySlice';
import { FilmAPI } from '../services/FilmService';

const rootReducer = combineReducers({
    themeReducer,
    categoryReducer,
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
