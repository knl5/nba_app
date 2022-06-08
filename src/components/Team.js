/* eslint-disable react/prop-types */
import React from 'react';

import {
  ContainerGame,
  TeamContent,
  TeamTitle,
  ContainerGamePart,

} from './styledComponents';

export function Team({ team }) {
  return(
    <ContainerGame>
      <ContainerGamePart>
        <TeamTitle>
          Team : {team.name}
        </TeamTitle>
        <TeamContent>
          {team.full_name} city: {team.city}
        </TeamContent>
      </ContainerGamePart>
    </ContainerGame>
  );
}

export default Team;