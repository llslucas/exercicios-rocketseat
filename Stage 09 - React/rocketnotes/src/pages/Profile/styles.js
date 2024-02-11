import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    height: 100vh;
    width: 100%;  
    
    display: grid;
    grid-template-rows: 144px auto;
`;

export const ProfileHeader = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 144px;

    > a{
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        cursor: pointer;
    }
`;

export const DataContainer = styled.div`
    display: grid;
    place-content: center;        
`;

export const Form = styled.form`
    width: 340px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    :nth-child(3){
        margin-top: 16px;
    }
`;

export const AvatarContainer = styled.div`
    width: 186px;
    height: 186px;

    position: absolute; 
    top: 51px;        
    left: calc(50% - 98px);

    > img{                
        height: 100%;
        border-radius: 50%;
    }

    >input{
        display: none;
    }

    >label{        
        background-color: ${({ theme }) => theme.COLORS.ORANGE};                      

        display: grid;
        place-content: center;

        border-radius: 50%;
        padding: 14px;

        position: absolute;
        right: 7px;
        bottom: 7px;

        cursor: pointer;

        svg{
            font-size: 20px;   
                     
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`;