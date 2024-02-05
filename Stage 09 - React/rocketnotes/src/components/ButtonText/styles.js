import styled from "styled-components";

export const Container = styled.button`
    color: ${({ theme }) => theme.COLORS.ORANGE};
    background: none;
    border: none;

    font-size: 16px;
    cursor: pointer;
`;