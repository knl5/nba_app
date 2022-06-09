import React, { useState, useEffect } from 'react';

import { PageContainer } from '../components/styledComponents';
import { Menu } from '../components/Menu';
import { getPlayersApi } from '../api';

export function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    getPlayersApi()
      .then(d => {
        setData(d.data.data);
      })
      .catch(e =>
        console.error(e)
      );
  }, []);

  console.log(data);

  return (
    <div>
      <Menu />
      <PageContainer>Test</PageContainer>
    </div>
  );
}

export default Home;
