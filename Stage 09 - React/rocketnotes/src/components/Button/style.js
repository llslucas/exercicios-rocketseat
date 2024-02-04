import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    height: 56px;
    border: 0;
    padding: 0;
    margin-top: 0;
    border-radius: 10;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }

    &:hover{
        cursor: pointer;
        filter: brightness(1.2);
    }
`;