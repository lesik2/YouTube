import React from 'react';
import { MESSAGES, STATIC_INFO } from '@constants/index';
import { useAppDispatch, useAppSelector } from '@hooks/redux';

import { useFetchAllCategoriesQuery } from '@//services/filmService';
import { changeCategory, setSearch } from '@//store/reducers/filterParamsSlice';

import { AllFilmsLink, CategoryLink, Error, Wrapper } from './styled';

const Categories: React.FC = () => {
    const { data, error, isLoading } = useFetchAllCategoriesQuery('genre');
    const categoryState = useAppSelector((state) => state.filterParamsReducer.category);
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const dispatch = useAppDispatch();
    const handleClick = (event: React.MouseEvent) => {
        const nameOfCategory: string | null = event.currentTarget.getAttribute('data-name');
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
            {error && <Error>{MESSAGES.ERROR_MESSAGE}</Error>}
            {data && (
                <>
                    <AllFilmsLink
                        data-name="All"
                        data-cy="all-link"
                        $active={categoryState === 'All'}
                        onClick={handleClick}>
                        {STATIC_INFO.LINK_ALL}
                    </AllFilmsLink>
                    {data?.slice(0, 6).map((category, index) => (
                        <CategoryLink
                            data-cy={`${index}-category`}
                            data-testid={`${index}-category`}
                            $active={categoryState === category.name}
                            onClick={handleClick}
                            key={index}
                            data-name={category.name}>
                            {category.slug}
                        </CategoryLink>
                    ))}
                </>
            )}
        </Wrapper>
    );
};
export default Categories;
