import React from 'react';
import { List, Wrapper } from './styled';
import { useFetchAllNamesQuery } from '@services/FilmService';
import { useAppDispatch } from '../../hooks/redux';
import { setSearch, changeCategory } from '../../store/reducers/FilterParamsSlice';
interface IElasticSearch {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}
const ElasticSearch: React.FC<IElasticSearch> = ({ value, setValue }) => {
    const { data } = useFetchAllNamesQuery(value);
    if (value === '' || data?.docs.length === 0) {
        return <></>;
    }
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(setSearch(value));
        dispatch(changeCategory(''));
        setValue('');
    };
    return (
        <Wrapper>
            {data?.docs &&
                data.docs.map((item, index) => (
                    <List onClick={handleClick} key={index}>
                        {item.enName}
                    </List>
                ))}
        </Wrapper>
    );
};

export default ElasticSearch;
