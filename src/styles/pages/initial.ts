import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    
    width: 100%;

    > h2 {
        color: #EAE0D5;
        margin-bottom: 10rem;
    }
`;

export const Form = styled.form`
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
`

export const QuantityContainer = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p {
        color: #C6AC8F
    }

    input {
        color: #000;
        border-color: #FF6C3E;
        margin: 0.25rem 0 0.50rem;
        transition: all 0.2s;
        background: #FFEBB220;

        &:hover {
            border-color: #FF6C3E;   
        }
    }

    button {
        color: #FF6C3E;
        display: flex;
        width: 10rem;
        transition: all 0.2s;

        &:hover {
            background: #FFEBB260;
        }
    }
`

export const Quantity = styled.div`
        display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`