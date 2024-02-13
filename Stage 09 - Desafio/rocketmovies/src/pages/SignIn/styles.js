import styled from 'styled-components';
import backgroundImg from '../../assets/bg.jpeg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 45% auto;
    grid-template-areas: 'content background';
`

export const Content = styled.div`
    grid-area: 'content';
    display: grid;
    place-content: center;

    gap: 4.8rem;

    > h2 {
        font-size: 2.4rem;
    }

    > a {
        text-align: center;
    }
`

export const Background = styled.div`
    grid-area: 'background';
    background: url(${backgroundImg}) no-repeat;
    background-size: cover;    
    opacity: 0.7;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    gap: 0.8rem;

    > button {
        margin-top: 1.6rem;
    }
`



