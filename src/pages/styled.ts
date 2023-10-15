import styled from 'styled-components';
export const Wrapper = styled.div<{ $DarkTheme?: boolean }>`
    background: ${(props) => (props.$DarkTheme ? '#23272f' : '#ffffff')};
    position: relative;
    overflow: hidden;
`;
