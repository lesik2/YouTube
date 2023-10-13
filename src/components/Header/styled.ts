import styled from 'styled-components';
export const Wrapper = styled.section`
    padding: 0px 8px;
    display: flex;
    align-items: center;
    min-height: 68px;
    justify-content: space-between;
`;
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;
export const LogoTitle = styled.h2<{ $DarkTheme?: boolean }>`
    color: ${(props) => (props.$DarkTheme ? '#ffffff' : '#000000')};
    font-family: bold;
    font-size: 18px;
    font-style: normal;
    line-height: normal;
    margin: 0;
`;
export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const SearchButton = styled.button`
    display: flex;
    width: 57px;
    height: 38px;
    padding: 11px 0px;
    justify-content: center;
    align-items: center;
    border: 1px solid #c4c4c4;
    outline: none;
    background: #ffffff;
    cursor: pointer;
`;
export const SearchInput = styled.input`
    width: 570px;
    height: 38px;
    padding: 5px 15px 5px 15px;
    border: 1px solid #c4c4c4;
    outline: none;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    &::placeholder {
        color: rgba(0, 0, 0, 0.51);
        font-size: 14px;
        font-style: normal;
        line-height: normal;
    }
`;
export const ToggleTheme = styled.input`
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
`;
export const ThemeBowl = styled.div`
    background: #ffffff;
    border-radius: 100%;
    width: 26px;
    height: 26px;
    border: 2px solid #ff8a00;
    position: absolute;
    bottom: -1px;
    left: -2px;
    transition: transform 0.3s;
`;