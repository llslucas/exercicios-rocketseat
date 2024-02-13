import styled from 'styled-components';

export const Container = styled.div`
    grid-area: 'header';
    width: 100%;
    height: 11.6rem;
    display: flex;
    flex-direction: row;

    padding: 2.4rem 12.3rem;
    gap: 6.4rem;
`;

export const User = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: right;
        font-size: 1.4rem;

        > h2{
            color: ${({ theme }) => theme.COLORS.WHITE};
            
            font-weight: 700;
        }

        > button {
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.GRAY_300};            
        }
    }

    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
`