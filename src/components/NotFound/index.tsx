import React from 'react';
import notFound from '@assets/icons/notFound.svg';
import { ImageWrapper, Info, Wrapper } from './styled';
import { useAppSelector } from '@hooks/redux';
import { NOTHING_FOUND_MESSAGE, ANOTHER_REQUEST_MESSAGE } from '@constants/index';

const NotFound = () => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    return (
        <Wrapper>
            <Info $DarkTheme={isDarkTheme}>{NOTHING_FOUND_MESSAGE}</Info>
            <ImageWrapper>
                <img alt="not found image" src={notFound} />
            </ImageWrapper>
            <Info $DarkTheme={isDarkTheme}>{ANOTHER_REQUEST_MESSAGE}</Info>
        </Wrapper>
    );
};
export default NotFound;
