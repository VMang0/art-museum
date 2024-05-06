import { MuseumLogoStyled, ModsenLogoStyled } from '@styled/components/logo';

import { FooterStyled, FooterWrapperStyled } from './styled';

export const Footer = () => (
  <FooterStyled>
    <FooterWrapperStyled>
      <MuseumLogoStyled mode="dark" />
      <ModsenLogoStyled />
    </FooterWrapperStyled>
  </FooterStyled>
);
