import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: relative;
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin-bottom: 2.5rem;
        color: #868A88; //quase branco
    }

`

export const FormQuestion = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    
    h6 {
        color: #FF6C3E;
        margin-bottom: 2.5rem;
    }

    textarea {
        margin-bottom: 1rem;
        color: #fff; //branco
        border-color: #000; //preto
        background: #494034; //marrom

        &:hover {
            border-color: #927E67;   //marrom claro
        }
    }

    > input {
        color: #fff;
        margin-bottom: 0.7rem;

        cursor: pointer !important;
        opacity: 1 !important;
        caret-color: transparent;

        &:hover {
            border-color: #927E67;   //marrom claro
        }
    }
        
        button {
            color: #EAE0D5; //quase branco claro
            display: flex;
            width: 8rem;
            transition: all 0.2s;

            margin-top: 0.3rem;

           &:hover {
                background: #EAE0D580; //quase branco mais claro
            }
        }

        button + button {
            column-gap: 0.5rem;
            align-items: center;
            justify-content: center;
            width: auto;

            &:hover {
                color: #EAE0D580; //quase branco mais claro
                text-decoration: none;
                background: none;
            }
        }

`

export const TextError = styled.h5`
    position: absolute;
    right: 5%;
    font-size: 24px;
    font-weight: 700;
    animation: pisca 3s ease-in-out infinite;

    @keyframes pisca {
    0% {
        color: #000;
        text-shadow: 0 0 12px #000,
        0 0 50px #000,
        0 0 100px #000,
    }
    10%, 80% {
        color: #931016;
        text-shadow: none;
    }
}

`;

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;

    button + button {
        position: absolute;
        right: 0;
        top: 15%;
    }

`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;

    svg {
        position: absolute;
        right: 0;
        margin-right: -2rem;
        top: 25%;
    }

`;