import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 14.4rem auto;
    grid-template-areas: 'header' 'content';
`;

export const Header = styled.header`
    grid-area: 'header';

    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.ROSE_100};
    padding: 0 14.4rem;
`;

export const Avatar = styled.div`
    position: absolute;
    top: 5.1rem;
    left: calc(50% - 9.3rem);

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > input {
        display: none;
    }

    > label {
        display: flex;
        align-items: center;

        width: fit-content;
        border-radius: 50%;

        background: ${({ theme }) => theme.COLORS.ROSE};
        padding: 1.4rem;

        position: absolute;
        right: .6rem;
        bottom: .6rem;

        cursor: pointer;

        > svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            width: 2rem;
            height: 2rem;
        }
    }
`;

export const Content = styled.main`
    grid-area: 'content';

    display: grid;
    place-content: center;
    grid-template-columns: 34rem;
    gap: 2.4rem;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.8rem;
`;