import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
    text-decoration: none;    
`;