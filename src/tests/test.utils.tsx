import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { combineReducers, configureStore, EmptyObject, EnhancedStore, PreloadedState } from '@reduxjs/toolkit';

import ThemeSlice from '../store/reducers/ThemeSlice';
import FilterParamsSlice from '../store/reducers/FilterParamsSlice';
import type { RootState } from '../store/index';

type ReducerTypes = Pick<RootState, 'themeReducer' | 'filterParamsReducer'>;
type TStore = EnhancedStore<ReducerTypes>;

type CustomRenderOptions = {
    preloadedState?: PreloadedState<ReducerTypes & EmptyObject>;
    store?: TStore;
} & Omit<RenderOptions, 'wrapper'>;

function render(ui: ReactElement, options?: CustomRenderOptions) {
    const { preloadedState } = options || {};

    const store =
        options?.store ||
        configureStore({
            reducer: combineReducers({
                themeReducer: ThemeSlice,
                filterParamsReducer: FilterParamsSlice,
            }),
            preloadedState,
        });

    function Wrapper({ children }: { children: React.ReactNode }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { render };
