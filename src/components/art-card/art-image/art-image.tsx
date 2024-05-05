import { FC } from 'react';

import NoImageIcon from '@assets/icons/no-image-icon.svg';
import { CardSize } from '@constants/card-size';

import { ArtImageStyled, ArtNoImageStyled } from './styled';

type ArtImagePropsType = {
  path?: string;
  size?: CardSize.BIG | CardSize.SMALL | undefined;
};

export const ArtImage: FC<ArtImagePropsType> = ({ path, size }) => {
  const url = `https://www.artic.edu/iiif/2/${path}/full/843,/0/default.jpg`;
  return (
    <>
      {path && <ArtImageStyled src={url} size={size} alt={''} />}
      {!path && <ArtNoImageStyled src={NoImageIcon} size={size} alt="no image icon" />}
    </>
  );
};
