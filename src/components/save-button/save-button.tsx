import { FC } from 'react';
import BookmarkIcon from '@assets/icons/bookmark.svg?react';
import { SaveButtonStyled } from '@components/save-button/styled';

type SaveButtonPropsType = {
  isFavorite: boolean;
  colorBG?: string;
};

export const SaveButton: FC<SaveButtonPropsType> = ({ click, isFavorite, colorBG }) => {
  return (
    <SaveButtonStyled onClick={click} $isFavorite={isFavorite} $color={colorBG}>
      <BookmarkIcon />
    </SaveButtonStyled>
  );
};
