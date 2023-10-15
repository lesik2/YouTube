import React, { useState } from 'react';
import { SearchButton, SearchInput, SearchWrapper } from './styled';
import searchIcon from '../../assets/icons/searchIcon.svg';
import { useAppDispatch } from '../../hooks/redux';
import { setSearch, changeCategory } from '../../store/reducers/FilterParamsSlice';

const SearchFilm = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleClick = () => {
        dispatch(setSearch(value));
        dispatch(changeCategory(''));
        setValue('');
    };
    return (
        <SearchWrapper>
            <SearchInput placeholder="Search" value={value} onChange={handleInput} />
            <SearchButton onClick={handleClick}>
                <img src={searchIcon} alt="search icon" />
            </SearchButton>
        </SearchWrapper>
    );
};
export default SearchFilm;
