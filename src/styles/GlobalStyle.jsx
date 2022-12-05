import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    *,*::before,*::after {
        margin: 0;
        padding: 0;  
        box-sizing:border-box;
    };
    *::selection {
        background-color:#3bb8d3;
        color: #fff;
    };
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', sans-serif;
        color: #2A2C2D;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        /* border-radius: 3px; */
    };
    input{
        /* display: flex; */
        outline: none;
    }
`;

export default GlobalStyle;
