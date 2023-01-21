import styled from "styled-components";

export const Container = styled.div`
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

export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
`