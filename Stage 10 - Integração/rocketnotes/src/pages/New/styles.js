import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;    
`;

export const Main = styled.main`     
    width: 100%;  
    overflow-y: auto;    
`;

export const Form = styled.div`
    width: 550px; 
    margin: 38px auto;    

    > button {        
        margin-top: 28px;        
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px; 
`;

export const TagsContainer = styled.div`     
    display: flex;  
    flex-wrap: wrap;      
    gap: 16px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 20px;

    button{
        font-size: 18px;        
    }
`;