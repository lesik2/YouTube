import styled from 'styled-components';
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
    transition:
        background 0.1s,
        border 0.1s;
    &:hover {
        background: #f0f0f0;
        border: 2px solid #c4c4c4;
    }
    @media (max-width: 440px) {
        width: 51px;
        height: 33px;
    }
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
    &:focus {
        border: 1px solid #ff8a00;
        box-shadow: inset 0px 0px 2px #ff8a00;
    }
    @media (max-width: 860px) {
        width: 350px;
    }
    @media (max-width: 440px) {
        width: 212px;
        height: 33px;
    }
    @media (max-width: 300px) {
        width: 161px;
    }
`;
