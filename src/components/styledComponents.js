import styled, { css } from 'styled-components';
import img from '../assets/background-image.jpg';
import { Link } from 'react-router-dom';

import { colors } from '../colors';

const transition = '200ms linear';

export const ContainerGame = styled.div`
	border-top: 1px solid ${colors.secondary};
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 1rem 50px;
	align-items: center;
	margin: 0 50px;
`;

export const TeamTitle = styled.div`
	font-size: 1rem;
	opacity: 0.6;
`;

export const TeamContent = styled.p`
	font-size: 2rem;
	font-weight: 600;
`;

export const ContainerGamePart = styled.div`
	margin-right: 2rem;
	text-align: center;
`;

export const ContainerScore = styled.p`
	font-size: 2.5rem;
	font-weight: 600;
	color: ${colors.tertiary}
`;

export const ContainerButton = styled.div`
	width: fit-content;
	padding: 0.5rem 0.8rem;
	color: ${colors.secondary};
	border: 1px solid ${colors.secondary};
	margin: 1rem auto;

	&:hover {
		background-color: ${colors.secondary};
		transition: ${transition};
		cursor: pointer;
		color: ${colors.main};
	}
`;

export const PageContainer = styled.div`
	margin: auto;
	width: 100%;
	height: 100%;
	padding: 5px;

	${({flex}) => flex ? css`
	display: flex;
	flex-direction: column;
	` :
    css`
		display: grid;
	width: 100%;
	grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
	`}
	font-size: 12px;
	
	background-color: ${colors.main};
	color: ${colors.secondary};
	margin-top: 100px;
`;

export const TitleContainer = styled.div`
	display: flex;
	margin: 350px 0;
	justify-content: center;
`;

export const PageTitle = styled.h1`
	font-size: 4rem;
	font-family: helvetica;
	font-weight: bold;
	color: ${colors.secondary};
`;


export const CardContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template: repeat(, 1fr);
  grid-gap: 30px 50px;
  grid-auto-rows: minmax(100px, auto);
	align-items: center;
	`;

export const PlayerCard = styled.div`
	width: 80%;
	height: auto;
	padding: 10px;
	margin: 10px;
	background-color: ${colors.main};
	border: 1px solid white;
	color: ${colors.secondary};
	text-align: center;
`;
export const PlayerContent = styled.p`
	font-size: 2rem;
	border-bottom: 1px solid white;
	padding: 40px 0;
	color: ${colors.tertiary};
`;

export const ContainerTeam = styled.div`
	display: flex;
	flex-direction: row;
	height: auto;
	width: 90%;
	align-items: center;
	padding: 30px;
	margin: 0 50px;
	border-bottom: 1px solid white;
`;
export const TeamDivision = styled.p`
	font-size: 2rem;
	font-weight: 600;
`;

export const DivisionTitle = styled.div`
	font-size: 1rem;
	flex-direction: column;
`;

export const TeamConference = styled.p`
	font-size: 2rem;
	font-weight: 600;
`;
export const ConferenceTitle = styled.div`
	font-size: 1rem;
	flex-direction: column;
`;

export const TeamDisplay = styled.div`
 width: 70%;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 margin-left: 4rem;
 
`;

export const TeamName = styled.p`
	font-size: 3rem;
	font-weight: 600;
	width: 25%;
`;


export const TeamInfo = styled.div`
	font-size: 1rem;
	font-weight: 600;
`;
export const ContainerMenu = styled.header`
	width: 100%;
	height: auto;
	background-color: ${colors.main};
	display: flex;
	padding: 1rem 2rem;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9;
`;

export const MenuLink = styled(Link)`
	text-decoration: none;
	color: ${colors.secondary};
	margin-right: 1rem;
	font-size: 1.2rem;

	&:hover {
		opacity: 0.5;
		transition: ${transition};
	}
`;

export const ContainerLogo = styled.div`
	width: 30px;
	height: auto;
	margin-right: 1rem;
`;

export const Logo = styled.svg`
	background: transparent;
	width: 100%;
	height: auto;
`;
export const BackgroundHome = styled.div`
	background-image: url(${img});
  width: 100%;
  background-size: cover;
  min-height: 795px;
  background-position-x: right;
  background-position-y: center;
`;
