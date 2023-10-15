import styled, { keyframes } from 'styled-components';
const warning = keyframes`
  from{
    filter: invert(0%) sepia(14%) saturate(5755%) hue-rotate(20deg) brightness(99%) contrast(101%);
    transform: scale(1);
  }
  to{
    filter: invert(44%) sepia(86%) saturate(947%) hue-rotate(6deg) brightness(95%) contrast(103%);
    transform: scale(1.2);
  }
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 2px solid #e67a00;
    border-radius: 15px;
`;
export const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    animation: ${warning} 1s infinite;
`;
export const Info = styled.h1<{ $DarkTheme?: boolean }>`
    font-family: bold;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000000')};
    @media (max-width: 270px) {
        font-size: 20px;
    }
`;
