import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 5px;

    padding: 5px 14px;
    margin-right: 6px;
`;