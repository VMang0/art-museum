import { FC } from 'react';

import { Navbar } from '@components/navbar';
import { TextStyled } from '@styled/components/typography';

import { BurgerMenuStyled, BlurStyled, BurgerMenuContentStyled } from './styled';

type BurgerMenuPropsType = {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
};

export const BurgerMenu: FC<BurgerMenuPropsType> = ({ onToggleMenu, isMenuOpen }) => (
  <BurgerMenuStyled $menuState={isMenuOpen}>
    <BlurStyled onClick={onToggleMenu} />
    <BurgerMenuContentStyled onClick={(event) => event.stopPropagation()}>
      <TextStyled size="s24">Menu</TextStyled>
      <Navbar />
    </BurgerMenuContentStyled>
  </BurgerMenuStyled>
);
