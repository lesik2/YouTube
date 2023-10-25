import React from 'react';
import notFound from '@assets/icons/notFound.svg';
import { MESSAGES } from '@constants/index';
import { useAppSelector } from '@hooks/redux';

import { ImageWrapper, Info, Wrapper } from './styled';

const NotFound = () => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    return (
        <Wrapper>
            <Info $DarkTheme={isDarkTheme}>{MESSAGES.NOTHING_FOUND_MESSAGE}</Info>
            <ImageWrapper>
                <img alt="not found image" src={notFound} />
            </ImageWrapper>
            <Info $DarkTheme={isDarkTheme}>{MESSAGES.ANOTHER_REQUEST_MESSAGE}</Info>
        </Wrapper>
    );
};
export default NotFound;
