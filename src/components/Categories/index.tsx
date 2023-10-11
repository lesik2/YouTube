import React from 'react';
import { AllFilmsLink, CategoryLink, Wrapper } from './styled';
import { CategoryAPI } from '../../services/CategoryService';

const Categories: React.FC = () => {
    const { data: categories, error, isLoading } = CategoryAPI.useFetchAllCategoriesQuery('genre');
    return (
        <Wrapper>
            {isLoading &&
                Array(7)
                    .fill('')
                    .map((item, index) => <CategoryLink key={index}>{item}</CategoryLink>)}
            {error && <h1>Something went wrong</h1>}
            {categories && (
                <>
                    <AllFilmsLink>All</AllFilmsLink>
                    {categories
                        ?.slice(0, 6)
                        .map((category, index) => <CategoryLink key={index}>{category}</CategoryLink>)}
                </>
            )}
        </Wrapper>
    );
};
export default Categories;
