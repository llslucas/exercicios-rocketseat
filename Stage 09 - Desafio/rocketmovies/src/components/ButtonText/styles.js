import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLOR.ROSE};
    text-decoration: none;
`;