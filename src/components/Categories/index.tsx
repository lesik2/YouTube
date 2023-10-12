import React from 'react';
import { AllFilmsLink, CategoryLink, Wrapper } from './styled';
import { CategoryAPI } from '../../services/CategoryService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCategory } from '../../store/reducers/CategorySlice';

const Categories: React.FC = () => {
    const { data: categories, error, isLoading } = CategoryAPI.useFetchAllCategoriesQuery('genre');
    const categoryState = useAppSelector((state) => state.categoryReducer.category);
    const dispatch = useAppDispatch();
    const handleClick = (event: React.MouseEvent) => {
        const nameOfCategory: string | null = event.currentTarget.textContent;
        if (nameOfCategory) {
            dispatch(changeCategory(nameOfCategory));
        }
    };
    return (
        <Wrapper>
            {isLoading &&
                Array(7)
                    .fill('')
                    .map((item, index) => <CategoryLink key={index}>{item}</CategoryLink>)}
            {error && <h1>Something went wrong</h1>}
            {categories && (
                <>
                    <AllFilmsLink $active={categoryState === 'All'} onClick={handleClick}>
                        All
                    </AllFilmsLink>
                    {categories?.slice(0, 6).map((category, index) => (
                        <CategoryLink $active={categoryState === category} onClick={handleClick} key={index}>
                            {category}
                        </CategoryLink>
                    ))}
                </>
            )}
        </Wrapper>
    );
};
export default Categories;
