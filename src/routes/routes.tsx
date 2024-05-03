import { FC } from 'react';
import { Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';

import { ContentLayout } from '@components/layout';
import { PATH } from '@constants/path';
import { ArtDetails } from '@pages/art-details';
import { Favorites } from '@pages/favorites';
import { Home } from '@pages/home';

export const Routes: FC = () => (
  <BrowserRoutes>
    <Route element={<ContentLayout />}>
      <Route exact path={PATH.BATH} element={<Home />} />
      <Route path={PATH.FAVORITES} element={<Favorites />} />
      <Route path={PATH.ART_DETAILS} element={<ArtDetails />} />
    </Route>

    <Route path="*" element={<Navigate to={PATH.BATH} />} />
  </BrowserRoutes>
);
