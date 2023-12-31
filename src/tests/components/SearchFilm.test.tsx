import React from 'react';
import * as Hooks from '@hooks/redux';
import * as actions from '@store/reducers/filterParamsSlice';
import userEvent from '@testing-library/user-event';
import SearchFilm from 'src/components/SearchFilm/index';

import { cleanup, fireEvent, render, screen } from '../test.utils';

const useDispatchMock = jest.spyOn(Hooks, 'useAppDispatch');

jest.mock('@components/ElasticSearch/index.tsx', () => {
    const ComponentToMock = () => <div />;
    return ComponentToMock;
});
describe('SearchFilm', () => {
    afterEach(() => {
        cleanup();
    });
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
        fireEvent.change(input, { target: { value: 'spider' } });
        await userEvent.click(button);
        expect(mockedSetSearch).toHaveBeenCalledWith('spider');
    });
});
