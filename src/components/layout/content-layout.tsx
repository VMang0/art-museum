import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { ContentWrapperStyled, PageWrapperStyled } from '@styled/components/layout';

import { ContentLayoutStyled } from './styled';

export const ContentLayout: FC = () => (
  <ContentLayoutStyled>
    <Header />
    <PageWrapperStyled>
      <ContentWrapperStyled>
        <Outlet />
      </ContentWrapperStyled>
    </PageWrapperStyled>
    <Footer />
  </ContentLayoutStyled>
);
