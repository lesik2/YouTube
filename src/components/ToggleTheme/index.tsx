import React, { useId } from 'react';
import { ThemeBowl, ToggleThemeInput, ToggleThemeLabel, Wrapper } from './styled';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeTheme } from '@store/reducers/ThemeSlice';

const ToggleTheme = () => {
    const id = useId();
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const dispatch = useAppDispatch();
    const handleOnChange = () => {
        dispatch(changeTheme());
    };
    return (
        <Wrapper data-testid="toggle-theme">
            <ToggleThemeInput onChange={handleOnChange} checked={isDarkTheme} type="checkbox" id={`${id}-themeInput`} />
            <ToggleThemeLabel className="theme-label" htmlFor={`${id}-themeInput`}>
                <ThemeBowl data-testid="toggle-bowl" className="theme-bowl" />
            </ToggleThemeLabel>
        </Wrapper>
    );
};
export default ToggleTheme;
