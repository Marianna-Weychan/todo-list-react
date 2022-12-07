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
		color: white;
		border: none;	
		padding: 0;
		margin: 10px;
		cursor: pointer;
		transition: background 0.3s;

   ${({ toggleDone }) => toggleDone && css`
		 background-color: hsl(125, 62%, 25%);
    	 transition: 1s;

	 &:hover {
		background-color: hsl(120, 100%, 35%);
		 }
	 &:active: {
		background-color: hsl(120, 100%, 45%);
		 }
		`}

   ${({ remove }) => remove && css`
		 background-color: hsl(0, 92%, 41%);
    	 transition: 1s;

		 &:hover {
		 background-color: hsl(0, 100%, 60%);
		 }
		 &:active {
		 background-color: hsl(0, 100%, 70%);
		 }
		`}
`;