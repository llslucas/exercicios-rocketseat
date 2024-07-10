import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    };

    :root{
        font-size: 62.5%; 
    };

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    };

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
    };

    a{
        text-decoration: none;    
        color: inherit;
    };

    button{
        background: none;
        border: none;
        cursor: pointer;

        display: flex;
        align-items: center;
    };

    input{
        color: ${({ theme }) => theme.COLORS.WHITE};  
        background: none;
        border: none;
        font-size: inherit;
    };

    input:focus{
        outline: none;
    }
`;