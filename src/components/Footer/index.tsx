import React from 'react';
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
import facebook from '@assets/icons/facebook.svg';
import twitter from '@close.svg';
import instagram from '@assets/icons/instagram.svg';
import linkedin from '@assets/icons/linkedIn.svg';
import { useAppSelector } from '@hooks/redux';

const Footer = () => {
    const isDarkTheme = useAppSelector((state) => state.themeReducer.isDarkTheme);
    return (
        <Wrapper $DarkTheme={isDarkTheme}>
            <WrapperInfo>
                <WrapperText>
                    <TextLeft $DarkTheme={isDarkTheme}>
                        TermsPrivacyPolicy & Safety
                        <br /> How YouTube works
                        <br /> Test new features
                    </TextLeft>
                    <TextRight $DarkTheme={isDarkTheme}>
                        About Press Copyright Contact us Creators Advertise Developers
                    </TextRight>
                </WrapperText>
                <WrapperLinks>
                    <ImageWrapper>
                        <img alt="facebook" src={facebook} />
                    </ImageWrapper>
                    <ImageWrapper>
                        <img alt="twitter" src={twitter} />
                    </ImageWrapper>
                    <ImageWrapper>
                        <img alt="instagram" src={instagram} />
                    </ImageWrapper>
                    <ImageWrapper>
                        <img alt="linkedin" src={linkedin} />
                    </ImageWrapper>
                </WrapperLinks>
                <FooterText $DarkTheme={isDarkTheme}>2023 Modsen company</FooterText>
            </WrapperInfo>
        </Wrapper>
    );
};
export default Footer;
