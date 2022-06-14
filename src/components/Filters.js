/* eslint-disable react/prop-types */
import React from 'react';

function Filters(props) {

  const { data, active } = props;
    
  const genres = data ? data.map(item => item.city) : null;
  const uniqueGenres = [...new Set(genres)];
    
  const oneGenre = uniqueGenres.map(item => {
    return <button 
      className={active === item ? 'filter active' : 'filter'}
      key={item} 
      onClick={() => props.filter(item)}>
      {item}
    </button>;
  });
   
  return  (
    <div className='filters'>
      {oneGenre}
    </div>
  );
}

export default Filters; 
