import styled from 'styled-components';
export const Wrapper = styled.div<{ $DarkTheme?: boolean }>`
    background: ${(props) => (props.$DarkTheme ? '#a6a6a6' : '#ffffff')};
`;
