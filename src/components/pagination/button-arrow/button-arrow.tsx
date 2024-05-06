import { FC } from 'react';

import ArrowIcon from '@assets/icons/arrow-icon.svg?react';

import { ButtonArrowStyled } from './styled';

type ButtonArrowPropsType = {
  isVisible: boolean;
  currentFirst: number;
  changeCurrentFirst: (value: number) => void;
  variant: 'previous' | 'next';
};

export const ButtonArrow: FC<ButtonArrowPropsType> = ({ isVisible, currentFirst, changeCurrentFirst, variant }) => {
  const switchPageItems = () => {
    if (variant === 'previous') {
      changeCurrentFirst(currentFirst - 4);
      return;
    }
    changeCurrentFirst(currentFirst + 4);
  };

  return (
    isVisible && (
      <ButtonArrowStyled onClick={switchPageItems} $variant={variant}>
        <ArrowIcon />
      </ButtonArrowStyled>
    )
  );
};
