import styled from 'styled-components';

export const Container = styled.div`
    > h1 {
        color: ${({ theme }) => theme.COLORS.ROSE};
        font-size: ${({ $size }) => (2.4 * $size) + 'rem'}; 
        font-weight: 700;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-size: 1.4rem;
        display: ${({ $subtitle }) => $subtitle ? 'block' : 'none'};
    }
`;