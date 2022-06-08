import styled from 'styled-components';

import { colors } from '../colors';

const transition = '200ms linear';

export const ContainerGame = styled.div`
	border-top: 1px solid red;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 1rem 1rem;
	align-items: center;
`;

export const TeamTitle = styled.div`
	font-size: 1rem;
`;

export const TeamContent = styled.p`
	font-size: 1.5rem;
`;

export const ContainerGamePart = styled.div`
	margin-right: 2rem;
	text-align: center;
`;

export const ContainerScore = styled.p`
	font-size: 2rem;
	font-weight: 600;
`;

export const ContainerButton = styled.div`
	width: fit-content;
	padding: 0.5rem 0.8rem;
	color: red;
	border: 1px solid red;
	margin: 1rem auto;

	&:hover {
		background-color: red;
		transition: ${transition};
		cursor: pointer;
		color: white;
	}
`;

export const PageContainer = styled.div`
	margin: auto;
	width: 100%;
	height: 100%;
	padding: 5px;
	font-size: 12px;
	display: flex;
	flex-direction: column;
	background-color: ${colors.main};
	color: ${colors.secondary};
`;

export const PageTitle = styled.h1`
	font-size: 2rem;
	font-family: helvetica;
	font-weight: bold;
	color: ${colors.secondary};
	align-self: center;
`;


export const CardContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template: repeat(, 1fr);
  grid-gap: 30px 50px;
  grid-auto-rows: minmax(100px, auto);
	`;

export const PlayerCard = styled.div`
	width: 80%;
	height: auto;
	padding: 10px;
	margin: 10px;
	background-color: ${colors.tertiary};
	color: ${colors.main};
	text-align: center;
`;
export const PlayerContent = styled.p`
	font-size: 1.5rem;
`;