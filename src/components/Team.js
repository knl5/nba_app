/* eslint-disable react/prop-types */
import React from 'react';

import {
  ContainerTeam,
  TeamDivision,
  DivisionTitle,
  TeamName,
  TeamInfo,
  TeamTitle,
  TeamDisplay,
  ConferenceTitle,
  TeamConference,

} from './styledComponents';

export function Team({ team }) {
  return(
    <ContainerTeam>

      <TeamName>{team.name}</TeamName>

      <TeamDisplay>
        <DivisionTitle>
      Division :
          <TeamDivision>
            {team.division}
          </TeamDivision>
        </DivisionTitle>

        <ConferenceTitle>
      Conference :
          <TeamConference>
            {team.conference}
          </TeamConference>
        </ConferenceTitle>

        <TeamInfo>
          <TeamTitle>
        City:
          </TeamTitle>
        
          {team.city} - {team.abbreviation}
        </TeamInfo>
      </TeamDisplay>
      
    </ContainerTeam>
  );
}

export default Team;