import { ThemeState } from '@customTypes/index';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ThemeState = {
    isDarkTheme: JSON.parse(localStorage.getItem('theme') ?? 'false'),
};
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
            localStorage.setItem('theme', JSON.stringify(state.isDarkTheme));
        },
    },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
