import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_PAGE};
        color: ${({theme}) => theme.COLORS.COLOR_WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, a {
        font-family: 'Robik Mono One', monospace;
        font-size: 16px;
        outline: none;
        list-style: none;
        text-decoration: none;
    }


`;