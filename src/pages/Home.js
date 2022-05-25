import React, { useEffect, useState } from 'react';

import { PageContainer } from './styledComponents';
import getTestApi from '../api';

export function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    getTestApi()
      .then(d => {
        setData(d.data.data);
      })
      .catch(e =>
        console.error(e)
      );
  }, []);

  console.log(data);

  return <PageContainer>Test</PageContainer>;
}

export default Home;
