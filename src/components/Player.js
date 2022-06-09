/* eslint-disable react/prop-types */
import React from 'react';

import {  
  CardContainer,
  TeamContent,
  PlayerContent,
} from './styledComponents';

export function DisplayPlayer({player}) {
  return (

    
    <CardContainer>
      <PlayerContent>{player.first_name} {player.last_name} </PlayerContent>
      <TeamContent>
            Team : {player.team.full_name}
      </TeamContent>
    </CardContainer>
  );
}

export default DisplayPlayer;