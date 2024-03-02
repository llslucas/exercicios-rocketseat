import styled from "styled-components";

export const Container = styled.div`    
    display: flex;    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-radius: 10px;

    background: ${({ theme, $isblank }) => $isblank == 'true' ? 'none' : theme.COLORS.BACKGROUND_900};
    border: ${({theme, $isblank }) => $isblank == 'true' ? '2px dashed ' + theme.COLORS.GRAY_300 : 'none'};

    > input {
        width: 100%;        
        background: none;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 16px;

        &:focus{
            outline: none;
        }
    }

    > button {
        background: none;
        border: none;
    }

    svg{
        color: ${({ theme, $isblank }) => $isblank == 'true' ? theme.COLORS.ORANGE : theme.COLORS.RED};
        font-size: 24px;
        cursor: pointer;
    }
`;