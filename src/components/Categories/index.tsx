import React from 'react';
import { AllFilmsLink, CategoryLink, Wrapper, Error } from './styled';
import { FilmAPI } from '@services/FilmService';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeCategory, setSearch } from '@store/reducers/FilterParamsSlice';

const Categories: React.FC = () => {
    const { data: categories, error, isLoading } = FilmAPI.useFetchAllCategoriesQuery('genre');
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
        <Wrapper data-testid="categories" $DarkTheme={isDarkTheme}>
            {isLoading &&
                Array(7)
                    .fill('')
                    .map((item, index) => <CategoryLink key={index}>{item}</CategoryLink>)}
            {error && <Error>Something went wrong</Error>}
            {categories && (
                <>
                    <AllFilmsLink $active={categoryState === 'All'} onClick={handleClick}>
                        All
                    </AllFilmsLink>
                    {categories?.slice(0, 6).map((category, index) => (
                        <CategoryLink $active={categoryState === category.name} onClick={handleClick} key={index}>
                            {category.name}
                        </CategoryLink>
                    ))}
                </>
            )}
        </Wrapper>
    );
};
export default Categories;
