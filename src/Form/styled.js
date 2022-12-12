import styled from "styled-components";

export const StyledForm = styled.form` 
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 20px;

@media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }`;

export const Input = styled.input`
        border: 1px solid #ddd;
        padding: 10px;
`;

export const Button = styled.button`
        padding: 10px;
        background-color: ${({ theme }) => theme.colors.teal};
        border: none;
        color: ${({ theme }) => theme.colors.white};
        transition: 0.3s;

&:hover {
        background-color: ${({ theme }) => theme.colors.java};
        transform: scale(1.1);

&:active {
        background-color: ${({ theme }) => theme.colors.viking};
}}
`;

