import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between; 

    img {
        background: #FFF;
        border: 0;
        border-radius: 0.25rem;
        padding: .5rem 0;
    }

    button {
        font-size: 1rem;
        font-weight: 600;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;