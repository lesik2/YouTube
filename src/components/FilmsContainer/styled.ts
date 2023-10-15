import styled from 'styled-components';
import { MAX_WIDTH_LAPTOP } from '../../constants/index';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 37px;
    align-items: center;
    justify-content: center;
    padding: 28px 12px 56px 16px;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        padding: 43px 17px 64px 14px;
    }
`;
export const FilmWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(332px, 100%), 1fr));
    column-gap: 20px;
    row-gap: 30px;
    width: 100%;
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        grid-template-columns: repeat(auto-fit, minmax(min(212px, 100%), 1fr));
        row-gap: 9px;
    }
    @media (max-width: 475px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 9px;
    }
`;
export const Button = styled.button`
    width: 193px;
    height: 52px;
    background: #ff8a00;
    color: #fff;
    font-family: bold;
    font-size: 22px;
    font-style: normal;
    line-height: normal;
    outline: none;
    border: none;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition:
        background 0.1s,
        border-radius 0.1s;
    &:hover {
        background: #e67a00;
        border-radius: 0px;
    }
    @media (max-width: ${MAX_WIDTH_LAPTOP}) {
        width: 207px;
        height: 33px;
        font-size: 18px;
    }
`;
export const Error = styled.h1`
    use-select: none;
`;
