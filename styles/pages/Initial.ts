import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;

    h2 {

        color: #000;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 40%;
    width: inherit;

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

export const Question = styled.div`
    width: inherit;
    display: flex;
    gap: 0.25rem;
    margin-top: 1rem;

    input {
        color: #000;
        border-color: #FF6C3E;
        background: #FFEBB220;

        &:hover {
            border-color: #FF6C3E;   
        }
    }
        
        button {
            color: #FF6C3E;
            display: flex;
            width: 8rem;
            transition: all 0.2s;

           &:hover {
                background: #FFEBB260;
            }
        }

`