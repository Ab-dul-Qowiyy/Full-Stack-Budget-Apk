import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        /* max-width: 1200px; */
        margin: 0 auto;
        /* border: 4px dashed green; */
    }

    button {
        border: none;
        outline: none;
        :focus{
            border: none;
            outline: none;
        }
    }

    a {
        color: blue;
        text-decoration:none;
    }

    ul {
        list-style: none;

        li {
            padding: 0;
            margin: 0;
        }
    }

    /* .container {
    background-color: yellow;
   } */
`;