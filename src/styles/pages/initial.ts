import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    
    width: 100%;

    > h2 {
        color: #EAE0D5;
        //margin-bottom: 10rem; depois adicionar de novo
        margin-bottom: 1rem; //tirar esse
    }
    
    @media (max-width: 720px) {
        text-align: center;

        > h2 {
            margin-bottom: 4rem;
        }
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: inherit;
    height: 100%;

    input {
        width: 100%;
    }

    h2 {
        color: #FF6C3E;
    }

    
    @media (max-width: 720px) {
        p {
            margin-bottom: 3rem;
        }
    }
`