import { FC } from 'react';

import { ButtonPageStyled } from './styled';

type ButtonPagePropsType = {
  number: number;
  activePage: number;
  setActivePage: (value: number) => void;
};

export const ButtonPage: FC<ButtonPagePropsType> = ({ number, activePage, setActivePage }) => (
  <ButtonPageStyled onClick={() => setActivePage(number)} $active={activePage === number}>
    {number}
  </ButtonPageStyled>
);
