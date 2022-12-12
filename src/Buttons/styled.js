import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
`;

export const StyledButton = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.teal};
    border: none;
    margin: 0 0 0 20px;
    transition: 0.3s;

@media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-basis: 100%;
    margin: 10px;
    }
   
&:hover {
   color: ${({ theme }) => theme.colors.bondiBlue};
}

&:disabled {
   color: ${({ theme }) => theme.colors.white};
}
`;