import styled from "styled-components";

export const StyledForm = styled.form` 
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 20px;

@media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }`;

export const Button = styled.button`
        padding: 10px;
        background-color: ${({ theme }) => theme.colors.teal};
        border: none;
        color: ${({ theme }) => theme.colors.white};
        transition: 0.3s;
        cursor: pointer;

        &:hover {
                filter: brightness(130%);
                transform: scale(1.1);

        &:active {
                filter: brightness(150%);
        }}
`;

