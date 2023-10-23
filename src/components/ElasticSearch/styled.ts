import styled from 'styled-components';

export const Wrapper = styled.ul<{ $show?: boolean }>`
    position: absolute;
    left: 0px;
    top: 39px;
    width: 570px;
    list-style: none;
    padding: 15px 0px 10px 0px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid black;
    z-index: 1000;
    margin: 0;
    @media (max-width: 870px) {
        width: 350px;
    }
    @media (max-width: 440px) {
        width: 212px;
        padding: 12px 0px 12px 0px;
        top: 34px;
    }
    @media (max-width: 300px) {
        width: 161px;
        padding: 8px 0px 8px 0px;
    }
`;

export const List = styled.li`
    font-size: 15px;
    cursor: pointer;
    padding: 7px 15px 7px 15px;
    display: block;
    width: 100%;
    user-select: none;
    &:hover {
        background-color: #f0f0f0;
    }
    @media (max-width: 870px) {
        padding: 5px 10px 5px 10px;
        font-size: 14px;
    }
    @media (max-width: 440px) {
        font-size: 13px;
        padding: 3px;
    }
`;
