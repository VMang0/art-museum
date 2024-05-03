import { useState } from 'react';

import BurgerIcon from '@assets/icons/burger-icon.svg?react';
import { Navbar } from '@components/navbar';
import { useScreenSize } from '@hooks/screen-size';
import { MuseumLogoStyled } from '@styled/components/logo';

import { BurgerMenu } from './burger-menu';
import { HeaderStyled, HeaderWrapperStyled } from './styled';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isSmallScreen } = useScreenSize();

  const onToggleMenu = () => setIsMenuOpen((state) => !state);

  return (
    <HeaderStyled>
      <HeaderWrapperStyled>
        <MuseumLogoStyled />
        {!isSmallScreen && <Navbar />}
        {isSmallScreen && (
          <>
            <BurgerIcon onClick={onToggleMenu} />
            <BurgerMenu onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
          </>
        )}
      </HeaderWrapperStyled>
    </HeaderStyled>
  );
};
