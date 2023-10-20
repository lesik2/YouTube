import React from 'react';
import Categories from 'src/components/Categories/index';
import { render, cleanup, screen } from '../test.utils';
import * as Hooks from '../../hooks/redux';
import * as actions from '../../store/reducers/FilterParamsSlice';
import userEvent from '@testing-library/user-event';

const useDispatchMock = jest.spyOn(Hooks, 'useAppDispatch');
const hookMocked = jest.fn();
jest.mock('../../services/FilmService', () => ({
    useFetchAllCategoriesQuery: () => hookMocked(),
}));
const mockData = [
    {
        name: 'аниме',
        slug: 'anime',
    },
    {
        name: 'биография',
        slug: 'biografiya',
    },
    {
        name: 'боевик',
        slug: 'boevik',
    },
    {
        name: 'вестерн',
        slug: 'vestern',
    },
    {
        name: 'военный',
        slug: 'voennyy',
    },
    {
        name: 'детектив',
        slug: 'detektiv',
    },
];
describe('Categories', () => {
    afterEach(() => {
        cleanup();
    });
    beforeEach(() => {
        hookMocked.mockClear();
    });
    test('should render Categories component', () => {
        hookMocked.mockReturnValueOnce({
            data: mockData,
            isLoading: false,
            isSuccess: true,
            isError: false,
            error: null,
        });
        const component = render(<Categories />);
        expect(component.getByTestId('categories')).toBeInTheDocument();
    });
    test('should show error message', () => {
        hookMocked.mockReturnValueOnce({
            data: undefined,
            isLoading: false,
            isSuccess: false,
            isError: true,
            error: 'error',
        });
        render(<Categories />);
        const error = screen.getByRole('heading');
        expect(error).toHaveTextContent('Something went wrong');
    });
    test('should show skeleton loader while pending', () => {
        hookMocked.mockReturnValueOnce({
            data: undefined,
            isLoading: true,
            isSuccess: false,
            isError: false,
            error: null,
        });
        const component = render(<Categories />);
        const categories = component.getByTestId('categories');
        expect(categories.children.length).toBe(7);
    });
    test('should show 7 categories', () => {
        hookMocked.mockReturnValueOnce({
            data: mockData,
            isLoading: false,
            isSuccess: true,
            isError: false,
            error: null,
        });
        const component = render(<Categories />);
        const categories = component.getByTestId('categories');
        expect(categories.children.length).toBe(7);
    });
    test('should dispatch actions', async () => {
        hookMocked.mockReturnValueOnce({
            data: mockData,
            isLoading: false,
            isSuccess: true,
            isError: false,
            error: null,
        });
        const dispatch = jest.fn();
        const mockedChangeCategory = jest.spyOn(actions, 'changeCategory');
        const mockedSetSearch = jest.spyOn(actions, 'setSearch');
        useDispatchMock.mockReturnValue(dispatch);
        render(<Categories />);
        const linkAnime = screen.getByTestId('0-category');
        await userEvent.click(linkAnime);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedChangeCategory).toHaveBeenCalledWith(linkAnime.textContent);
        expect(mockedSetSearch).toHaveBeenCalledWith('');
    });
});