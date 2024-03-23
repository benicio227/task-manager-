import styled from 'styled-components';

export const Container = styled.input`
    width: 100%;
    height: 55px;
    padding: 20px;
    margin-bottom: 7px;
    border-radius: 10px;
    border: 0;
    font-weight: 600;
    font-size: 17px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};
    color: ${({theme}) => theme.COLORS.COLOR_WHITE};
`;