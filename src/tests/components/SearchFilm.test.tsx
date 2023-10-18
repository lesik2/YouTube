import React from 'react';
import SearchFilm from 'src/components/SearchFilm/index';
import { render, cleanup, screen, fireEvent } from '../test.utils';
import * as Hooks from '../../hooks/redux';
import * as actions from '../../store/reducers/FilterParamsSlice';
import userEvent from '@testing-library/user-event';

const useDispatchMock = jest.spyOn(Hooks, 'useAppDispatch');
afterEach(() => {
    cleanup();
});
describe('SearchFilm', () => {
    test('should render SearchFilm component', () => {
        const component = render(<SearchFilm />);
        expect(component.getByTestId('search-film')).toBeInTheDocument();
    });
    test('It should allow symbols to be inputted', () => {
        render(<SearchFilm />);
        const input: HTMLInputElement = screen.getByRole('textbox');
        expect(input.value).toBe(''); // empty before
        fireEvent.change(input, { target: { value: 'spider man' } });
        expect(input.value).toBe('spider man'); //empty after
    });
    test('should dispatch actions', async () => {
        const dispatch = jest.fn();
        const mockedChangeCategory = jest.spyOn(actions, 'changeCategory');
        const mockedSetSearch = jest.spyOn(actions, 'setSearch');
        useDispatchMock.mockReturnValue(dispatch);
        render(<SearchFilm />);
        const button = screen.getByRole('button');
        await userEvent.click(button);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedChangeCategory).toHaveBeenCalledWith('');
        expect(mockedSetSearch).toHaveBeenCalled();
    });
    test('should dispatch action with value from input', async () => {
        const dispatch = jest.fn();
        const mockedSetSearch = jest.spyOn(actions, 'setSearch');
        useDispatchMock.mockReturnValue(dispatch);
        render(<SearchFilm />);
        const button = screen.getByRole('button');
        const input: HTMLInputElement = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'spider man' } });
        await userEvent.click(button);
        expect(mockedSetSearch).toHaveBeenCalledWith('spider man');
    });
});
