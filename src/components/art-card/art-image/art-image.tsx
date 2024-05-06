import { FC, useState } from 'react';

import NoImageIcon from '@assets/icons/no-image-icon.svg';
import { CardSize } from '@constants/card-size';
import { ThumbnailType } from '@types/art';

import { ArtImageStyled, ArtNoImageStyled } from './styled';

type ArtImagePropsType = {
  size?: CardSize.BIG | CardSize.SMALL | undefined;
  imageId: string | undefined;
  thumbnail: ThumbnailType;
};

export const ArtImage: FC<ArtImagePropsType> = ({ size, imageId, thumbnail }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const url = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

  const handleError = () => setIsError(true);

  return (
    <>
      {(!imageId || isError) && <ArtNoImageStyled src={NoImageIcon} size={size} alt="no image icon" />}
      {imageId && !isError && <ArtImageStyled src={url} size={size} alt={thumbnail.alt_text} onError={handleError} />}
    </>
  );
};
