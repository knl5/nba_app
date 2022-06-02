import styled from 'styled-components';

import { colors } from '../colors';

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
	grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px 50px;
  grid-auto-rows: minmax(100px, auto);
	justify-content: center;
	align-self: center;
	`;

export const PlayerCard = styled.div`
	width: 150px;
	height: auto;
	padding: 10px;
	background-color: ${colors.tertiary};
	color: ${colors.main};
	text-align: center;
`;
export const PlayerName = styled.div`
	font-size: 1rem;
`;