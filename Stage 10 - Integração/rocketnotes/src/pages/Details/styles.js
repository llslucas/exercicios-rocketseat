import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 106px auto;
    grid-template-areas:
    "header"
    "content";

    > main{
        grid-area: "content";      
        overflow-y: auto;         
    }    
`;

export const Links = styled.ul`
    list-style: none;

    > li{
        margin-top: 12px;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-decoration: none;
        }
    }    
`;

export const Content = styled.div`
    max-width: 560px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;       

    > h1{
        font-size: 36px; 
        font-weight: 500;
    }  

    > button{            
            place-self: end; 
            margin: 40px 0;   
    }   
    
    > p{
        text-align: justify;
        font-style: normal;
        font-weight: 400;
        margin-top: 16px;
    }
`;