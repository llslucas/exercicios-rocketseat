import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 10px;

    padding: 16px 22px;

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        cursor: pointer;
    }

    > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: 700;
    }

    > footer {
        display: flex;
        flex-direction: row;

        margin-top: 24px;

        gap: 8px;

        > span{
            display: flex;
            align-items: center;

            font-size: 14px;

            padding: 5px 14px;
            border-radius: 5px;

            background-color: ${({ theme }) => theme.COLORS.ORANGE};
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }    
`;
