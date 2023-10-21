import React, { useState } from 'react';
import { SearchButton, SearchInput, SearchWrapper } from './styled';
import searchIcon from '@assets/icons/searchIcon.svg';
import { useAppDispatch } from '../../hooks/redux';
import { setSearch, changeCategory } from '../../store/reducers/FilterParamsSlice';
import ElasticSearch from '../ElasticSearch';

const SearchFilm = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setSearch(value));
        dispatch(changeCategory(''));
        setValue('');
    };
    return (
        <SearchWrapper data-testid="search-film" onSubmit={handleSubmit}>
            <SearchInput data-cy="search-input" type="text" placeholder="Search" value={value} onChange={handleInput} />
            <SearchButton data-cy="submit" type="submit">
                <img src={searchIcon} alt="search icon" />
            </SearchButton>
            <ElasticSearch value={value} setValue={setValue} />
        </SearchWrapper>
    );
};
export default SearchFilm;
