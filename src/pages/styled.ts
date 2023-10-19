import styled from 'styled-components';
export const Wrapper = styled.div<{ $DarkTheme?: boolean }>`
    background-color: ${(props) => (props.$DarkTheme ? '#23272f' : '#ffffff')};
    position: relative;
    overflow: hidden;
`;
