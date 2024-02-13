import styled from 'styled-components';

export const Container =  styled.button`
    width: 100%;
    padding: 0 1.68rem;

    background-color: ${({ theme }) => theme.COLORS.ROSE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    font-size: 1.6rem;    
    text-align: center;
`