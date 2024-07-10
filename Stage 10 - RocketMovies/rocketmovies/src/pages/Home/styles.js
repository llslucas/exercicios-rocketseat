import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
    'header'
    'content';
    grid-template-rows: 11.6rem auto;
`

export const Content = styled.main`
    max-width: 100%;
    display: flex;         
    flex-direction: column;   
    overflow-y: auto;

    gap: 4rem;
    padding: 5rem 12.3rem;    
`;

export const Title = styled.section`
    display: grid;
    height: 4.8rem;
    grid-template-columns: auto 20.7rem;  
    
    > h1 {
        font-size: 3.2rem;     
        font-weight: 400;   
    }    
`

export const Notes = styled.section`    
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 0.8rem;        
    };

    &::-webkit-scrollbar{
        background: none;
    }

    &::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.ROSE};
        border-radius: 0.8rem;
    }
`