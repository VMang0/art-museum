import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoImageIcon from '@assets/icons/no-image-icon.svg';
import { SaveButton } from '@components/save-button';
import { actionFavorite, favoritesSelector } from '@redux/slices/favoriteSlice';
import { theme } from '@styled/theme';
import { ThumbnailType } from '@types/art';

import { ArtNoImageStyled, ArtImageStyled, ImageWrapperStyled, ButtonWrapperStyled } from './styled';

type ArtImagePropsType = {
  imageId: string | undefined;
  thumbnail: ThumbnailType;
  id: number;
};

export const ArtImage: FC<ArtImagePropsType> = ({ imageId, thumbnail, id }) => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const url = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  const favorites = useSelector(favoritesSelector);
  const isFavorite = favorites.some((item) => item === id);

  const onAction = (e) => {
    e.stopPropagation();
    dispatch(actionFavorite(id));
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <ImageWrapperStyled>
      {(!imageId || isError) && <ArtNoImageStyled src={NoImageIcon} alt="no image icon" />}
      {imageId && !isError && <ArtImageStyled src={url} alt={thumbnail.alt_text} onError={handleError} />}
      <ButtonWrapperStyled>
        <SaveButton click={onAction} isFavorite={isFavorite} colorBG={theme.colors.white.primary} />
      </ButtonWrapperStyled>
    </ImageWrapperStyled>
  );
};
