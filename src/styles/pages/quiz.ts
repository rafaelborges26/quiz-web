import styled from "styled-components";

export const Container = styled.div`
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
        border-color: #000;
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

`