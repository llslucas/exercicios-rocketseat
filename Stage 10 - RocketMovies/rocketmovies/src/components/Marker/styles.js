import styled from 'styled-components';

export const Container = styled.div`    
    background: ${({ theme, $isnew }) => !$isnew ? theme.COLORS.BACKGROUND_800 : 'none'};
    border: ${({ theme, $isnew }) => !$isnew ? 'none' : '2px dashed ' + theme.COLORS.GRAY_300};

    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 1.6rem;    
    gap: 1.6rem;

    padding: 1.6rem;
    border-radius: 1rem;
    
    > button > svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
        font-size: 2.4rem;
    }  
`;