/* eslint-disable react/prop-types */
import React from 'react';

import { ContainerButton } from './styledComponents';

export function Button({ content, onClick }) {
  return(
    <ContainerButton onClick={onClick}>
      {content}
    </ContainerButton>
  );
}

export default Button;