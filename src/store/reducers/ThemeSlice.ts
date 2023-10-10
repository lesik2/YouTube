import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    isDarkTheme: boolean;
}
const initialState: ThemeState = {
    isDarkTheme: false,
};
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        },
    },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
