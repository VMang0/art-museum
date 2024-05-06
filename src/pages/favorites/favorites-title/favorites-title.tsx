import BookmarkIcon from '@assets/icons/bookmark.svg?react';
import { FavoritesTitleStyled } from './styled';

export const FavoritesTitle = () => (
  <FavoritesTitleStyled>
    Here are your <br />
    <span>
      <BookmarkIcon />
      favorites
    </span>
  </FavoritesTitleStyled>
);
