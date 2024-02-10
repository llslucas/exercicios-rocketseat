import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 48px;
        font-weight: 700;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 14px;
        font-weight: 400;
    }
`;