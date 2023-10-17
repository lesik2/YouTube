// test-utils.ts
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { configureStore, EmptyObject, EnhancedStore, PreloadedState } from '@reduxjs/toolkit';

// import your reducers
import ThemeReducer from '../store/reducers/ThemeSlice';
import type { RootState } from '../store/index';

// ReducerTypes is just a grouping of each slice type,
// in this example i'm just passing down a User Reducer/State.
// With this, you can define the type for your store.
// The type of a configureStore() is called EnhancedStore,
// which in turn receives the store state as a generic (the same from store.getState()).
type reducers = 'themeReducer';
type ReducerTypes = Pick<RootState, reducers>;
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
            reducer: {
                themeReducer: ThemeReducer,
            },
            preloadedState,
        });

    function Wrapper({ children }: { children: React.ReactNode }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return rtlRender(ui, { wrapper: Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
