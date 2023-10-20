import React from 'react';
import { AllFilmsLink, CategoryLink, Wrapper, Error } from './styled';
import { useFetchAllCategoriesQuery } from '@services/FilmService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCategory, setSearch } from '../../store/reducers/FilterParamsSlice';
import { ERROR_MESSAGE } from '@//constants';

const Categories: React.FC = () => {
    const { data, error, isLoading } = useFetchAllCategoriesQuery('genre');
    const categoryState = useAppSelector((state) => state.filterParamsReducer.category);
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const dispatch = useAppDispatch();
    const handleClick = (event: React.MouseEvent) => {
        const nameOfCategory: string | null = event.currentTarget.textContent;
        if (nameOfCategory) {
            dispatch(changeCategory(nameOfCategory));
            dispatch(setSearch(''));
        }
    };
    return (
        <Wrapper data-cy="categories" data-testid="categories" $DarkTheme={isDarkTheme}>
            {isLoading &&
                Array(7)
                    .fill('')
                    .map((item, index) => <CategoryLink key={index}>{item}</CategoryLink>)}
            {error && <Error>{ERROR_MESSAGE}</Error>}
            {data && (
                <>
                    <AllFilmsLink data-cy="all-link" $active={categoryState === 'All'} onClick={handleClick}>
                        All
                    </AllFilmsLink>
                    {data?.slice(0, 6).map((category, index) => (
                        <CategoryLink
                            data-cy={`${index}-category`}
                            data-testid={`${index}-category`}
                            $active={categoryState === category.name}
                            onClick={handleClick}
                            key={index}>
                            {category.name}
                        </CategoryLink>
                    ))}
                </>
            )}
        </Wrapper>
    );
};
export default Categories;
