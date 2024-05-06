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

import { ArtBigCardStyled } from './styled';

export const ArtBigCard: FC<{ art: ArtType }> = ({ art }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);
  const navigate = useNavigateToArt();
  const { id, imageId, thumbnail, ...info } = art;
  const isFavorite = favorites.some((item) => item === id);

  const onAction = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(actionFavorite(id));
  };

  return (
    <ArtBigCardStyled onClick={() => navigate(id)}>
      <ArtImage size={CardSize.BIG} imageId={imageId} thumbnail={thumbnail} />
      <ArtInfoStyled>
        <ArtInfo {...info} />
        <SaveButton click={onAction} isFavorite={isFavorite} colorBG={theme.colors.white.light} />
      </ArtInfoStyled>
    </ArtBigCardStyled>
  );
};
