import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Loader from '@assets/icons/loader.svg?react';
import NothingFound from '@assets/icons/not-found.png';
import { ErrorBoundary } from '@components/error-boundary';
import { SmallCardsContainer } from '@components/small-cards-container';
import { Subtitle } from '@components/subtitle';
import { FavoritesTitle } from '@pages/favorites/favorites-title';
import { useGetArtsByIdsQuery } from '@redux/api/art-api';
import { favoritesSelector } from '@redux/slices/favoriteSlice';
import { SectionWrapperStyled } from '@styled/components/layout';
import { ItemTextStyled } from '@styled/components/typography';

const segment2 = 'Saved by you';
const description2 = 'Your favorites list';

export const Favorites = () => {
  const favorites = useSelector(favoritesSelector);
  const { data, isLoading } = useGetArtsByIdsQuery(favorites);
  const [arts, setArts] = useState([]);

  useEffect(() => {
    if (favorites.length > 0) {
      setArts(data);
    } else {
      setArts([]);
    }
  }, [favorites, data]);

  return (
    <ErrorBoundary>
      <FavoritesTitle />
      <SectionWrapperStyled>
        <Subtitle segment={segment2} description={description2} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {arts && arts.length > 0 ? (
              <SmallCardsContainer data={arts} />
            ) : (
              <div>
                <img src={NothingFound} alt="Nothing was found" />
                <ItemTextStyled>Nothing was found</ItemTextStyled>
              </div>
            )}
          </>
        )}
      </SectionWrapperStyled>
    </ErrorBoundary>
  );
};
