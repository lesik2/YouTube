import React, { useState } from 'react';
import searchIcon from '@assets/icons/searchIcon.svg';
import { useAppDispatch } from '@hooks/redux';

import { changeCategory, setSearch } from '@//store/reducers/filterParamsSlice';

import ElasticSearch from '../ElasticSearch';

import { SearchButton, SearchInput, SearchWrapper } from './styled';

const SearchFilm = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setSearch(value));
        dispatch(changeCategory(''));
        setShowSearch(false);
    };
    return (
        <SearchWrapper data-testid="search-film" onSubmit={handleSubmit}>
            <SearchInput data-cy="search-input" type="text" placeholder="Search" value={value} onChange={handleInput} />
            <SearchButton data-cy="submit" type="submit">
                <img src={searchIcon} alt="search icon" />
            </SearchButton>
            <ElasticSearch value={value} showSearch={showSearch} setShowSearch={setShowSearch} />
        </SearchWrapper>
    );
};
export default SearchFilm;
