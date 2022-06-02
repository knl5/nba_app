/* eslint-disable react/prop-types */
import React from 'react';


export function DisplayPlayer({player}) {
  return <div>
    <p>{player.first_name} {player.last_name}</p> 
    Team : {player.team.full_name}
  </div>
  ;
}

export default DisplayPlayer;