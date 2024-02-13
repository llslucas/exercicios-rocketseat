import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
    text-decoration: none;    

    > svg {
        margin-right: .8rem;
        font-size: 2rem;
    }
`;