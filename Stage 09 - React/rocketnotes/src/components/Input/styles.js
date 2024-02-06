import styled from "styled-components";

export const Container = styled.input`
    width: 100%;
    padding: 20px 16px;    
    border: none;
    
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`;