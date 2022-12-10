import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
`;

export const StyledButton = styled.button`
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    border: none;
    margin: 0 0 0 20px;
    transition: 0.3s;

@media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
    }
    
&:hover {
    color: hsl(180, 100%, 35%);
}

&:disabled {
    color: #ccc;
}
`;