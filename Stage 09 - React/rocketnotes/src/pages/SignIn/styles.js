import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 40% auto;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};        
`;

export const DataContainer = styled.div`
    display: grid;
    place-content: center;  
    text-align: center;  
`;

export const ImgContainer = styled.div`
    background-image: url(${({ theme }) => theme.IMAGES.BACKGROUND});
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