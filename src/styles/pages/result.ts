import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    transition: all 0.25ms;

    h4 {
        margin-bottom: 1.5rem;
        color: #EAE0D5; //quase branco
        text-align: center;
    }

    button {
        margin-left: auto;
        color: #EAE0D5;
        font-weight: 700;
        
        :hover {
            filter: brightness(80%);
        }

        @media (max-width: 720px) {
            margin-top: 2rem;
        }   
    }

    
    @media (max-width: 720px) {
        margin-top: 2rem;
    }

`

export const Content = styled.div`
    margin-top: 2rem;

    p {
        font-weight: 500;
        text-align: center;

        color: #FF6C3E;
        margin-bottom: 2rem;
    }
`