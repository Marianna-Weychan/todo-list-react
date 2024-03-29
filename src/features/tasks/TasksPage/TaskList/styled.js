import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul` 
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const Item = styled.li`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-gap: 10px;
	align-items: center;
	border-bottom: 1px solid #ddd;
	padding: 10px;

${({ hidden }) => hidden && css`
	display: none
		 `}
`;

export const Content = styled.span`
${({ done }) => done && css`
	text-decoration: line-through;
 `}
`;

export const Button = styled.button`
	width: 30px;
	height: 30px;
	color: ${({ theme }) => theme.colors.white};
	border: none;	
	padding: 0;
	margin: 10px;
	cursor: pointer;
	transition: background 0.3s;

${({ toggleDone }) => toggleDone && css`
	background-color: ${({ theme }) => theme.colors.parsley};
    transition: 1s;

	&:hover {
		filter: brightness(120%);
		 }

	&:active {
		filter: brightness(140%);
		 }
		`}

${({ remove }) => remove && css`
	background-color:  ${({ theme }) => theme.colors.milanoRed};
    transition: 1s;

	&:hover {
	filter: brightness(120%);
		 }

	&:active {
	filter: brightness(140%);
				  }
		`}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;   
    color: teal; 
`;