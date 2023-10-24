import React from 'react';
import notFound from '@assets/icons/notFound.svg';
import { ANOTHER_REQUEST_MESSAGE, NOTHING_FOUND_MESSAGE } from '@constants/index';
import { useAppSelector } from '@hooks/redux';

import { ImageWrapper, Info, Wrapper } from './styled';

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
