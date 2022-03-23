import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
    }

    body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: "Source Sans Pro", sans-serif;
        color: ${props => props.theme.text};
        width: 100vw;
        height: 100vh;
        background-color: ${props => props.theme.body};
    }

`;

export default GlobalStyle;
