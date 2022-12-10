import styled from "styled-components";

export const StyledForm = styled.form` 
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 20px;

        @media (max-width: 767px) {
             grid-template-columns: 1fr;
    }`;

export const Input = styled.input`
        border: 1px solid #ddd;
        padding: 10px;
`;

export const Button = styled.button`
        padding: 10px;
        background-color: hsl(180, 100%, 25%);
        border: none;
        color: white;
        transition: 0.3s;

&:hover {
        background-color: hsla(192, 59%, 45%, 0.729);
        transform: scale(1.1);

&:active {
        background-color: hsla(192, 59%, 65%, 0.729);
}
}`;

