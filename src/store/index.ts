import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/ThemeSlice';
import { CategoryAPI } from '../services/CategoryService';

const rootReducer = combineReducers({
    themeReducer,
    [CategoryAPI.reducerPath]: CategoryAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CategoryAPI.middleware),
    });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
