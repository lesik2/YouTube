import { MAX_WIDTH_LAPTOP } from '../../constants/index';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
    height: 100px;
    width: 100px;
    border: 8px solid #e3e3e3;
    border-radius: 50%;
    border-right-color: #ff8a00;
    animation: ${spin} 1s infinite;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        width: 60px;
        height: 60px;
    }
`;
