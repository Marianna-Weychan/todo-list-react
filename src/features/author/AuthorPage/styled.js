import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  padding: 10px;
  line-height: 1.5;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    }
`;

export const Image = styled.img`
  display: grid;
  grid-template-columns: 1fr;
  border-radius:25%;
  box-shadow: 9px 5px 12px 0px rgba(73, 88, 89, 0.55);  
`;

export const Description = styled.p`
  line-height: 1.5;
`;

export const Link = styled.a`
   text-decoration: none;
   color: ${({ theme }) => theme.colors.teal};
   &:hover {
    color: ${({ theme }) => theme.colors.turquoise};
    cursor: pointer;
  }
`;
export const YouCode = styled.span`
color: ${({ theme }) => theme.colors.carrotOrange};
`;

