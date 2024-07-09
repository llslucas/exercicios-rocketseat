import styled from "styled-components";

export const Container = styled.div`
    width: 100%;  
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    &:has(input:autofill, input:-webkit-autofill){
        background-color: rgb(232 240 254);
        color: black;        
    }

    >input {        
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        width: 100%;
        padding: 16px 20px;    
        
        border: none;

        font-size: 14px;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        };

        &:autofill{
            border-radius: 10px;
        }

        &:-webkit-autofill{
            border-radius: 10px;
        }

        &:focus{
            outline: none;
        }   
    }

    > svg {
        margin-left: 20px;
    }    
`;