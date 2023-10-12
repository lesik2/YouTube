import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CategoryState {
    category: string;
}
const initialState: CategoryState = {
    category: 'All',
};
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
    },
});
export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
