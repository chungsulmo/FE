import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        margin: 0;
        padding: 0;  
    };
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
    }
`;

export default GlobalStyle;
