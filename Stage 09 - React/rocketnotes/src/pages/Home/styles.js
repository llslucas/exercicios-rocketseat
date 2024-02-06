import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;    

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;
    display: grid;
    place-content: center;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 20px;
    font-weight: 700;    

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h2 {
        font-size: 24px;
    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
    }
    
`;

export const Search = styled.div`
    grid-area: search;
    padding: 64px;

    > input {
        font-size: 14px;
    }
`;

export const Content = styled.div`
    grid-area: content;
    
`;

export const NewNote = styled.button`
    grid-area: newnote;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    

    background: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;
    
    font-size: 20px;

    cursor: pointer;

    transition: filter 0.2s;  

    &:hover {
        filter: brightness(1.2);              
    };

    > svg{
        margin-right: 8px;
        font-size: 24px;
    };
`;
    
