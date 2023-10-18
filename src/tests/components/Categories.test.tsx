import React from 'react';
import Categories from 'src/components/Categories/index';
import { render, cleanup } from '../test.utils';

afterEach(() => {
    cleanup();
});
describe('Categories', () => {
    test('should render Categories component', () => {
        const component = render(<Categories />);
        expect(component.getByTestId('categories')).toBeInTheDocument();
    });
});
