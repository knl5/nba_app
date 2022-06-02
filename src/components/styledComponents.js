import styled from 'styled-components';

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