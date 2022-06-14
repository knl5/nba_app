import React from 'react';

import { PageContainer, PageTitle, TitleContainer, BackgroundHome } from '../components/styledComponents';
import { Menu } from '../components/Menu';

export function Home() {
  return (
    <div>
      <Menu />
      <PageContainer flex={true}>
        <BackgroundHome>
          <TitleContainer>
            <PageTitle> Welcome on NBAs website </PageTitle>
          </TitleContainer>
        </BackgroundHome>
      </PageContainer>
      
    </div>
  );
}

export default Home;
