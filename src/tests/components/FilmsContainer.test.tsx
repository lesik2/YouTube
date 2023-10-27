/* eslint-disable max-len */
import React from 'react';
import { FILMS_PER_PAGE, MESSAGES } from '@constants/index';
import FilmsContainer from 'src/components/FilmsContainer/index';

import { cleanup, render, screen } from '../test.utils';
const hookMocked = jest.fn();
jest.mock('@services/FilmService', () => ({
    useFetchAllFilmsQuery: () => hookMocked(),
}));
jest.mock('@components/Film/index.tsx', () => {
    const ComponentToMock = () => <div data-testid="film" />;
    return ComponentToMock;
});
const mockData = {
    docs: [
        {
            enName: null,
            id: 535341,
            name: '1+1',
            year: 2011,
            persons: [{ enName: 'François Cluzet', name: 'Франсуа Клюзе' }],
            poster: {
                url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig',
            },
            videos: {
                trailers: [
                    {
                        url: 'https://www.youtube.com/embed/0RqDiYnFxTk',
                    },
                ],
            },
        },
    ],
    page: 1,
    limit: 16,
};
describe('FilmsContainer component', () => {
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
        const component = render(<FilmsContainer />);
        expect(component.getByTestId('films-container')).toBeInTheDocument();
    });
    test(`should show film`, () => {
        hookMocked.mockReturnValueOnce({
            data: mockData,
            isLoading: false,
            isSuccess: true,
            isError: false,
            error: null,
        });
        const component = render(<FilmsContainer />);
        const categories = component.getByTestId('film-wrapper');
        expect(categories.children.length).toBe(1);
        expect(screen.getByTestId('film')).toBeInTheDocument();
    });
    test('should show error message', () => {
        hookMocked.mockReturnValueOnce({
            data: undefined,
            isLoading: false,
            isSuccess: false,
            isError: true,
            error: 'error',
        });
        render(<FilmsContainer />);
        const error = screen.getByRole('heading');
        expect(error).toHaveTextContent(MESSAGES.ERROR_MESSAGE);
    });
    test('should show skeleton loader while pending', () => {
        hookMocked.mockReturnValueOnce({
            data: undefined,
            isLoading: true,
            isSuccess: false,
            isError: false,
            error: null,
        });
        const component = render(<FilmsContainer />);
        const categories = component.getByTestId('film-wrapper');
        expect(categories.children.length).toBe(FILMS_PER_PAGE);
    });
});
