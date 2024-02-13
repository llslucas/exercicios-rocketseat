import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    padding: 1.8rem;

    > input {
        font-size: 1.6rem;        
    }

    > svg {
        width: 1.8rem;
        height: 1.8rem;
        margin-left: 18px;
    }
`