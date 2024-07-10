import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};    
    padding: 1.8rem;
    border-radius: 1rem;

    > input {
        font-size: 1.6rem;        
        background: transparent;
        width: 100%;
        border: none;        
        color: ${({ theme }) => theme.COLORS.WHITE};

        &:focus{
            outline: none;
        }

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 18px;
    }
`