import styled from 'styled-components';

export const Container = styled.div`
    grid-area: 'header';
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 2.4rem 12.3rem;
    gap: 6.4rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const User = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 20rem;
    gap: 0.9rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;   
        justify-content: center;     

        > h2{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.4rem;
            font-weight: 700;
        }

        > button {
            background: none;
            border: none;
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};        
            cursor: pointer;    
        }
    }

    img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
        
        object-fit: cover;
    }
`