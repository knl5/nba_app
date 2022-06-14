import React, { useEffect, useState } from 'react';

import { PageContainer } from '../components/styledComponents';
import { Team, Menu, Filters } from '../components';
import { getTeamsApi } from '../api';


export function Teams() {
  const [teams, setTeams] = useState();
  const [filtersValues, setFiltersValues] = useState();
  // const [selected, setSelected] = useState();

  useEffect(() => {
    getTeamsApi()
      .then(result => 
        setTeams(result.data.data)
        // console.log(teams);
      )
      .catch(e =>
        console.error(e)
      );
  }, []);

  function cleanData() {
    setFiltersValues([...new Set(teams)]);
    console.log(filtersValues);
  }

  useEffect(() => {
    cleanData();
  }, []);
     

  if(teams) {
    return(

      <div>
        <Menu/>
        <Filters filter={teams} />
        <PageContainer flex={true}>
          {teams && teams.map(team => {
            return (
              <Team key={team.id} team={team} />
            );
          })
          } 
        </PageContainer>
      </div>
    );
  }
    
  return (
    <p>chargement...</p>
  );
} 
export default Teams;

