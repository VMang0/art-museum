import { FC } from 'react';
import NoImageIcon from '@assets/icons/no-image-icon.svg';
import { CardSize } from '@constants/card-size';

import { ArtNoImageStyled, ArtImageStyled } from './styled';

type ArtImagePropsType = {
  //path?: string;
  size?: CardSize.BIG | CardSize.SMALL | undefined;
};

export const ArtImage: FC<ArtImagePropsType> = ({ path, size }) => {
  const url = `https://www.artic.edu/iiif/2/${path.imageId}/full/843,/0/default.jpg`;
  return (
    <>
      {(!path || !url) && <ArtNoImageStyled src={NoImageIcon} size={size} alt="no image icon" />}
      {path && <ArtImageStyled src={url || path.thumbnail.lqip} alt={path.thumbnail.alt_text} size={size} />}
    </>
  );
};
