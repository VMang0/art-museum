import { useParams } from 'react-router-dom';
import { ArtImage } from '@pages/art-details/art-image';
import { ArtInfo } from '@pages/art-details/art-info';
import { ArtDetailsWrapperStyled } from '@pages/art-details/styled';

import { useGetArtByIdQuery } from '../../store/api/art-api';

export const ArtDetails = () => {
  const { id } = useParams();
  const { data } = useGetArtByIdQuery(id);
  const art = data?.data;
  return (
    <ArtDetailsWrapperStyled>
      {art && (
        <>
          <ArtImage path={{ thumbnail: art.thumbnail, imageId: art.image_id }} />
          <ArtInfo data={art} />
        </>
      )}
    </ArtDetailsWrapperStyled>
  );
};
