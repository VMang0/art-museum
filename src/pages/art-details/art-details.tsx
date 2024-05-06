import { useParams } from 'react-router-dom';

import Loader from '@assets/icons/loader.svg?react';
import { ErrorBoundary } from '@components/error-boundary';
import { ArtImage } from '@pages/art-details/art-image';
import { ArtInfo } from '@pages/art-details/art-info';
import { ArtDetailsWrapperStyled } from '@pages/art-details/styled';
import { useGetArtByIdQuery } from '@redux/api/art-api';

export const ArtDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetArtByIdQuery(id);

  return (
    <ErrorBoundary>
      {isLoading ? (
        <Loader />
      ) : (
        <ArtDetailsWrapperStyled>
          {data && (
            <>
              <ArtImage imageId={data.imageId} thumbnail={data.thumbnail} id={data.id} />
              <ArtInfo data={data} />
            </>
          )}
        </ArtDetailsWrapperStyled>
      )}
    </ErrorBoundary>
  );
};
