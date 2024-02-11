import styled from "styled-components";

export const Container = styled.div`
    width: 100%;  

    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    >TextArea {        
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        width: 100%;
        padding: 16px 20px;   
        border: none;

        font-size: 14px;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        };

        &:focus{
            outline: none;
        }
    }

    > svg {
        margin-left: 20px;
    }    
`;