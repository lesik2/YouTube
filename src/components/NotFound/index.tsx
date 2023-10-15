import React from 'react';
import notFound from '../../assets/icons/notFound.svg';
import { ImageWrapper, Info, Wrapper } from './styled';
import { useAppSelector } from '../../hooks/redux';

const NotFound = () => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    return (
        <Wrapper>
            <Info $DarkTheme={isDarkTheme}>Nothing was found</Info>
            <ImageWrapper>
                <img alt="not found image" src={notFound} />
            </ImageWrapper>
            <Info $DarkTheme={isDarkTheme}>Try another request</Info>
        </Wrapper>
    );
};
export default NotFound;
