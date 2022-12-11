import styled, { css } from "styled-components";

export const TasksList = styled.ul` 
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
		background-color:${({ theme }) => theme.colors.green};
		 }
	 &:active {
		background-color: ${({ theme }) => theme.colors.mintGreen};
		 }
		`}

   ${({ remove }) => remove && css`
		 background-color:  ${({ theme }) => theme.colors.milanoRed};
    	 transition: 1s;

		 &:hover {
		 background-color: ${({ theme }) => theme.colors.mandy};
		 }

		 &:active {
		 background-color: ${({ theme }) => theme.colors.mandysPink};
		 }
		`}
`;