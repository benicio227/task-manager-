import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.COLOR_BLUE};
    color: ${({theme}) => theme.COLORS.COLOR_WHITE};
    height: 70px;
    padding: 16px;
    margin-top: 16px;
    border-radius: 10px;
    border: none;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 1px;
    cursor: pointer;
`;