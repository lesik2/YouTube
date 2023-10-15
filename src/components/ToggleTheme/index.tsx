import React, { useId } from 'react';
import { ThemeBowl, ToggleThemeInput, ToggleThemeLabel } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeTheme } from '../../store/reducers/ThemeSlice';

const ToggleTheme = () => {
    const id = useId();
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    const dispatch = useAppDispatch();
    const handleOnChange = () => {
        dispatch(changeTheme());
    };
    return (
        <>
            <ToggleThemeInput onChange={handleOnChange} checked={isDarkTheme} type="checkbox" id={`${id}-themeInput`} />
            <ToggleThemeLabel className="theme-label" htmlFor={`${id}-themeInput`}>
                <ThemeBowl className="theme-bowl" />
            </ToggleThemeLabel>
        </>
    );
};
export default ToggleTheme;
