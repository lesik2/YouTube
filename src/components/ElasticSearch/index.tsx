import React, { useEffect } from 'react';
import { List, Wrapper } from './styled';
import { useFetchAllNamesQuery } from '@services/FilmService';
import { useAppDispatch } from '@hooks/redux';
import { setSearch, changeCategory } from '@store/reducers/FilterParamsSlice';
import { useDebounce } from '@//hooks/debounce';
interface IElasticSearch {
    value: string;
    showSearch: boolean;
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
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
    }, [debounced, data]);
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
                            <List data-cy={`${index}-list`} onClick={handleClick} key={index}>
                                {item.enName ?? item.name}
                            </List>
                        ))}
                </Wrapper>
            )}
        </>
    );
};

export default ElasticSearch;
