import React, { useEffect } from 'react';
import { IElasticSearch } from '@customTypes/index';
import { useDebounce } from '@hooks/debounce';
import { useAppDispatch } from '@hooks/redux';

import { useFetchAllNamesQuery } from '@//services/filmService';
import { changeCategory, setSearch } from '@//store/reducers/filterParamsSlice';

import { List, Wrapper } from './styled';
const ElasticSearch: React.FC<IElasticSearch> = ({ value, showSearch, setShowSearch }) => {
    const debounced = useDebounce(value);
    const { data } = useFetchAllNamesQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true,
    });
    useEffect(() => {
        if (data) {
            setShowSearch(debounced.length >= 3 && data.length > 0);
        }
    }, [debounced, data, setShowSearch]);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(setSearch(value));
        dispatch(changeCategory(''));
        setShowSearch(false);
    };
    return (
        <>
            {showSearch && (
                <Wrapper data-cy="elastic-search">
                    {data &&
                        data.map((item, index) => (
                            <List data-cy={`${index}-list`} onClick={handleClick} key={item.name ?? item.enName}>
                                {item.enName ?? item.name}
                            </List>
                        ))}
                </Wrapper>
            )}
        </>
    );
};

export default React.memo(ElasticSearch, (prevProps, nextProps) => {
    if (nextProps.value.length >= 3) {
        return false;
    } else {
        return true;
    }
});
