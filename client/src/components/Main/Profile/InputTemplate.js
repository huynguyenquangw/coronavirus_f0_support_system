import styled from 'styled-components'

export const Container = styled.div`
    display: flex !important;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-between;

    label{
    font-size: 0.8rem;
    color: #002341;
    }

    input{
    color: #002341;
    font-family: Nunito, sans-serif;
    font-weight: 700;
    box-sizing: border-box;
    font-size: 1.2rem;
    padding: 0 0.2rem 0.7rem 0.2rem;
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 2px solid #afcbe4;
    }

    input:focus, input:hover{
        color: #00A473;
        border-bottom: 3px solid #00A473;
}
`;

export const Field = styled.div`
    flex-basis: 45%;
`;
