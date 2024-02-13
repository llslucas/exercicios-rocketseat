import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;    

    padding: 3.2rem;
    gap: 1.5rem;
    border-radius: 1.6rem;

    background: ${({ theme }) => theme.COLORS.ROSE_100};    

    > div > h1 {
        font-size: 2.4rem;
        font-weight: 700;
    };

    > p {        
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        height: 5rem;   
        overflow: hidden;
        white-space: pre;
        text-overflow: ellipsis; 
    }
`;

export const Stars = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;

    > svg {
        width: 1.4rem;
        height: 1.4rem;
        margin-top: 0.8rem;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
`
export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
`

export const Tag = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 0.5rem 1.6rem;
    border-radius: 0.8rem;
    font-size: 1.2rem;
`;