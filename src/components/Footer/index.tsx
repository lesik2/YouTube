import React from 'react';
import facebook from '@assets/icons/facebook.svg';
import instagram from '@assets/icons/instagram.svg';
import linkedin from '@assets/icons/linkedIn.svg';
import twitter from '@assets/icons/twitter.svg';
import { STATIC_INFO } from '@constants/index';
import { useAppSelector } from '@hooks/redux';

import {
    FooterText,
    ImageWrapper,
    TextLeft,
    TextRight,
    Wrapper,
    WrapperInfo,
    WrapperLinks,
    WrapperText,
} from './styled';

const Footer = () => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    return (
        <Wrapper $DarkTheme={isDarkTheme}>
            <WrapperInfo>
                <WrapperText>
                    <TextLeft $DarkTheme={isDarkTheme}>
                        {STATIC_INFO.FOOTER_SAFETY}
                        <br />
                        {STATIC_INFO.FOOTER_YOUTUBE}
                        <br />
                        {STATIC_INFO.FOOTER_FEATURES}
                    </TextLeft>
                    <TextRight $DarkTheme={isDarkTheme}>{STATIC_INFO.FOOTER_CONTACT}</TextRight>
                </WrapperText>
                <WrapperLinks>
                    <ImageWrapper>
                        <a href="/">
                            <img alt="facebook" src={facebook} />
                        </a>
                    </ImageWrapper>
                    <ImageWrapper>
                        <a href="/">
                            <img alt="twitter" src={twitter} />
                        </a>
                    </ImageWrapper>
                    <ImageWrapper>
                        <a href="/">
                            <img alt="instagram" src={instagram} />
                        </a>
                    </ImageWrapper>
                    <ImageWrapper>
                        <a href="/">
                            <img alt="linkedin" src={linkedin} />
                        </a>
                    </ImageWrapper>
                </WrapperLinks>
                <FooterText $DarkTheme={isDarkTheme}>
                    {new Date().getFullYear()} {STATIC_INFO.FOOTER_NAME_OF_COMPANY}
                </FooterText>
            </WrapperInfo>
        </Wrapper>
    );
};
export default Footer;
