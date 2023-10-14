import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Content = styled.div`
    position: relative;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Close = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: background-color 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #f2f2f2;
    }
    &:hover .close-img {
        filter: invert(59%) sepia(87%) saturate(2633%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
`;
export const Image = styled.img`
    transition: filter 0.2s;
`;
export const IFrame = styled.iframe`
    border: none;
    outline: none;
    width: 900px;
    height: 500px;
`;
