import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;

    > svg {
        width: ${({ $size }) => $size};
        height: ${({ $size }) => $size};
        margin-top: 0.8rem;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
`