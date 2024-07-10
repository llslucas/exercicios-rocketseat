import styled from 'styled-components';

export const Container = styled.div`
    max-width: 144rem;
    height: 100vh;
    margin: 0 auto;

    display: grid;
    grid-template-areas: "header" "content";
    grid-template-rows: 11.6rem auto;    
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 4.25rem 12.3rem;

    > h1 {
        font-size: 3.6rem;
        font-weight: 500;
    }

    > h2 {
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_200}
    }
`;

export const Col2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;   
`

export const Markers = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;    
    flex-direction: row;

    gap: 2.4rem; 
    padding: 1.6rem;
    border-radius: 0.8rem;    

    background-color: ${({ theme }) => theme.COLORS.BLACK};
`;