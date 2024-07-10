import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 'header' 'content';
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;    
    gap: 4rem;

    padding: 4rem 12.3rem;
`;

export const Title = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 2.4rem;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.9rem;

        > h1 {
            font-size: 3.6rem;
            font-weight: 500;
        }        
    }
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.8rem;
    font-size: 1.6rem;

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
`;

export const TimeStamp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.8rem;
    font-size: 1.6rem;

    >svg{
        width: 1.6rem;
        height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
`;

export const Tags = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
`

export const Tag = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 0.8rem 1.6rem;
    border-radius: 0.8rem;
    font-size: 1.2rem;
`;

export const Text = styled.section`   
    font-size: 1.6rem;
    text-align: justify;  
    
    > p {
        margin-bottom: 2.4rem;
    }
`;