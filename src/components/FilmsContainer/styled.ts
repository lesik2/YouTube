import styled from 'styled-components';
export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 37px;
    align-items: center;
    justify-content: center;
    padding: 28px 12px 56px 16px;
`;
export const FilmWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(332px, 100%), 1fr));
    column-gap: 20px;
    row-gap: 30px;
    width: 100%;
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
`;
