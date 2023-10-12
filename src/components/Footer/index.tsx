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
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedIn.svg';

const Footer = () => {
    return (
        <Wrapper>
            <WrapperInfo>
                <WrapperText>
                    <TextLeft>
                        TermsPrivacyPolicy & Safety
                        <br /> How YouTube works
                        <br /> Test new features
                    </TextLeft>
                    <TextRight>About Press Copyright Contact us Creators Advertise Developers</TextRight>
                </WrapperText>
                <FooterText>2023 Modsen company</FooterText>
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
            </WrapperInfo>
        </Wrapper>
    );
};
export default Footer;
