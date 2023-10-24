import { FilterParamsState } from '@customTypes/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FilterParamsState = {
    category: 'All',
    search: '',
};
export const filterParamsSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});
export const { changeCategory, setSearch } = filterParamsSlice.actions;
export default filterParamsSlice.reducer;
