import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
    font-family:
        bold,
        sans-serif,
        Gill Sans;
`;
const MainPage: React.FC = () => {
    return <Title>Main Page</Title>;
};
export default MainPage;
