import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: auto 40%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};        
`;

export const DataContainer = styled.div`
    display: grid;
    place-content: center;  
    text-align: center;    
`;

export const ImgContainer = styled.div`
    background: url(${({ theme }) => theme.IMAGES.BACKGROUND}) no-repeat;
    background-size: cover;
    opacity: 0.5;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 124px;

    > h2 {
        padding: 48px 0;
    }
`;