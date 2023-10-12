import styled from 'styled-components';
export const Wrapper = styled.div<{ $DarkTheme?: boolean }>`
    background: ${(props) => (props.$DarkTheme ? '#737373' : '#ffffff')};
`;
