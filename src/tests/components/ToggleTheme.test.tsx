import React from 'react';
import ToggleTheme from 'src/components/ToggleTheme/index';
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from '../test.utils';
import * as Hooks from '../../hooks/redux';
import * as actions from '../../store/reducers/ThemeSlice';
const useDispatchMock = jest.spyOn(Hooks, 'useAppDispatch');
afterEach(() => {
    cleanup();
});
describe('ToggleComponent', () => {
    test('should render ToggleTheme component', () => {
        const component = render(<ToggleTheme />);
        expect(component.getByTestId('toggle-theme')).toBeInTheDocument();
    });
    test('changes style of div as checkbox is checked/unchecked', async () => {
        render(<ToggleTheme />, {
            preloadedState: { themeReducer: { isDarkTheme: false } },
        });
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
        await userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });
    test('changes style of  bowl in label', async () => {
        const component = render(<ToggleTheme />, {
            preloadedState: { themeReducer: { isDarkTheme: false } },
        });
        const checkbox = screen.getByRole('checkbox');
        await userEvent.click(checkbox);
        const bowl = component.getByTestId('toggle-bowl');
        expect(bowl).toHaveStyle('transform: translateX(25px);');
    });
    test('should dispatch actions', async () => {
        const dispatch = jest.fn();
        const mockedChangeTheme = jest.spyOn(actions, 'changeTheme');
        useDispatchMock.mockReturnValue(dispatch);
        render(<ToggleTheme />, {
            preloadedState: { themeReducer: { isDarkTheme: false } },
        });
        const checkbox = screen.getByRole('checkbox');
        await userEvent.click(checkbox);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedChangeTheme).toHaveBeenCalled();
    });
});
