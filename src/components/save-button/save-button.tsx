import BookmarkIcon from '@assets/icons/bookmark.svg?react';
import { SaveButtonStyled } from '@components/save-button/styled';

export const SaveButton = () => {
  return (
    <SaveButtonStyled onClick={(e) => e.stopPropagation()}>
      <BookmarkIcon />
    </SaveButtonStyled>
  );
};
