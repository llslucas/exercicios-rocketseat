import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area: 'header';

    height: 106px;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img{
        height: 56px;
        width: 56px;
        border-radius: 50%;
        aspect-ratio: 1;
        object-fit: cover;    
        object-position: top;
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 20px;

        span{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 14px;
            font-weight: 400;
        }

        strong{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 18px;
            font-weight: 700;
        }
    }  
`;

export const Logout = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    
    svg{
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 24px;
    }
`;
