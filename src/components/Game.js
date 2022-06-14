/* eslint-disable react/prop-types */
import React from 'react';

import Button from './Button';
import {
  ContainerGame,
  TeamContent,
  TeamTitle,
  ContainerGamePart,
  ContainerScore
} from './styledComponents';

export function Game({ game }) {
  function onClick() {
    alert('t\'as cliqué');
  }
  return(
    <ContainerGame>
      <ContainerGamePart>
        <TeamTitle>
          Home Team
        </TeamTitle>
        <TeamContent>
          {game.home_team.full_name}
        </TeamContent>
        <Button content="View team stats" onClick={onClick} />
      </ContainerGamePart>
      <ContainerGamePart>
        <TeamTitle>
          🏆 Final score
        </TeamTitle>
        <ContainerScore>
          {game.home_team_score} - {game.visitor_team_score}
        </ContainerScore>
      </ContainerGamePart>
      <ContainerGamePart>
        <TeamTitle>
          Visitor Team
        </TeamTitle>
        <TeamContent>
          {game.visitor_team.full_name}
        </TeamContent>
        <Button content="View team stats" onClick={onClick} />
      </ContainerGamePart>
    </ContainerGame>
  );
}

export default Game;