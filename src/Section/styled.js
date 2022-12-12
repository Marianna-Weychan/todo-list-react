import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const SectionHeader = styled.header`
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 20px;

   @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const SectionBody = styled.div`
    padding: 20px;
`;

