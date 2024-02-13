import styled from 'styled-components';

export const Container =  styled.button`
    width: 100%;
    height: 4.8rem;
    padding: 1.68rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.ROSE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 1rem;
    
    font-size: 1.6rem;    
    text-align: center;

    cursor: pointer;

    transition-duration: 0.2s;

    &:hover{
        filter: brightness(1.2);
    }

    > svg {
        margin-right: 0.8rem;
        font-size: 2rem;
    }
`