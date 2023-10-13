import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
    height: 200px;
    weight: 200px;
    border: 12px solid #e3e3e3;
    border-radius: 50%;
    border-right-color: #ff8a00;
    animation: ${spin} 1s easy infinite;
`;
