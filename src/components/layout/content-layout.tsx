import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { ContentWrapperStyled } from '@styled/components/layout';
import { PageWrapperStyled } from '@styled/components/layout/content-wrapper';

import { ContentLayoutStyled } from './styled';

export const ContentLayout: FC = () => {
  return (
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
};
