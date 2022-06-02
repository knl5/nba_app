import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
    </div>
  );
}

export default Menu;