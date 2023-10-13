import styled from 'styled-components';

export const Wrapper = styled.section<{ $DarkTheme?: boolean }>`
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-top: 1px solid ${(props) => (props.$DarkTheme ? '#ffffff' : 'rgba(0, 0, 0, 0.19)')};
    border-bottom: 1px solid ${(props) => (props.$DarkTheme ? '#ffffff' : 'rgba(0, 0, 0, 0.19)')};
`;
export const AllFilmsLink = styled.a<{ $active?: boolean }>`
    width: 52px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    user-select: none;
    background: ${(props) => (props.$active ? '#000000' : '#F0F0F0')};
    color: ${(props) => (props.$active ? '#f8f8f8' : '#000')};
    &:hover {
        color: ${(props) => (props.$active ? '#f8f8f8' : '#000')};
        text-decoration: none;
        background: ${(props) => (props.$active ? '#000000' : '#cccccc')};
        transition: background 0.2s;
    }
`;
export const CategoryLink = styled.a<{ $active?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    width: 91px;
    height: 30px;
    user-select: none;
    background: ${(props) => (props.$active ? '#000000' : '#F0F0F0')};
    color: ${(props) => (props.$active ? '#f8f8f8' : '#000')};
    transition: background 0.2s;
    &:hover {
        color: ${(props) => (props.$active ? '#f8f8f8' : '#000')};
        text-decoration: none;
        background: ${(props) => (props.$active ? '#000000' : '#cccccc')};
    }
`;
