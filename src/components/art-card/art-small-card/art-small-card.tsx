import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ArtImage } from '@components/art-card/art-image';
import { ArtInfo } from '@components/art-card/art-info';
import { ArtInfoStyled } from '@components/art-card/styled';
import { SaveButton } from '@components/save-button';
import { CardSize } from '@constants/card-size';
import { useNavigateToArt } from '@hooks/navigate-to-art';
import { actionFavorite, favoritesSelector } from '@redux/slices/favoriteSlice';
import { theme } from '@styled/theme';
import { ArtType } from '@types/art';

export const ArtSmallCard: FC<{ art: ArtType }> = ({ art }) => {
  const dispatch = useDispatch();
  const navigate = useNavigateToArt();
  const favorites = useSelector(favoritesSelector);
  const { id, imageId, thumbnail, ...info } = art;
  const isFavorite = favorites.some((item) => item === id);

  const onAction = (e) => {
    e.stopPropagation();
    dispatch(actionFavorite(id));
  };

  return (
    <ArtInfoStyled size={CardSize.SMALL} onClick={() => navigate(id)}>
      <ArtImage size={CardSize.SMALL} imageId={imageId} thumbnail={thumbnail} />
      <ArtInfo size={CardSize.SMALL} {...info} />
      <SaveButton click={onAction} isFavorite={isFavorite} colorBG={theme.colors.white.light} />
    </ArtInfoStyled>
  );
};
