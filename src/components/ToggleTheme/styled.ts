import styled from 'styled-components';
export const ToggleThemeInput = styled.input`
    display: none;
    &:checked + .theme-label .theme-bowl {
        transform: translateX(25px);
    }
`;
export const ToggleThemeLabel = styled.label`
    display: block;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    border: 2px solid #ff8a00;
    position: relative;
    cursor: pointer;
`;
export const ThemeBowl = styled.div`
    background: #ffffff;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    border: 2px solid #ff8a00;
    position: absolute;
    bottom: -1px;
    left: -2px;
    transition: transform 0.3s;
`;
