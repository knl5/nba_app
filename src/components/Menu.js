import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/players">Players</Link>
      <Link to="/teams">Teams</Link>
    </div>
  );
}

export default Menu;