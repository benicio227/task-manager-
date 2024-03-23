import styled from 'styled-components';
import backgroundImage from '../../assets/imagem-tarefas.png';

export const Container = styled.div`
    display: flex;
`;

export const LeftColumn = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RigthColumn = styled.div`
    width: 50%;
    height: 100vh;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
`;

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h2 {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    > a {
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.COLOR_WHITE};
    }

    > a:hover {
        font-weight: 600;
    }
`;



