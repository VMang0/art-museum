import BookmarkIcon from '@assets/icons/bookmark.svg?react';
import HomeIcon from '@assets/icons/home.svg?react';
import { NavBarStyled, LinkItemStyled, LinkGroupStyled, LinkStyled } from '@components/navbar/styled';
import { PATH } from '@constants/path';
import { TextStyled } from '@styled/components/typography';
import { theme } from '@styled/theme';

export const Navbar = () => {
  return (
    <NavBarStyled>
      <LinkGroupStyled>
        <LinkItemStyled>
          <LinkStyled to={PATH.BATH}>
            <HomeIcon />
            <TextStyled size={theme.fontSizes.s18}>Home</TextStyled>
          </LinkStyled>
        </LinkItemStyled>
        <LinkItemStyled>
          <LinkStyled to={PATH.FAVORITES}>
            <BookmarkIcon />
            <TextStyled size={theme.fontSizes.s18}>Your favorites</TextStyled>
          </LinkStyled>
        </LinkItemStyled>
      </LinkGroupStyled>
    </NavBarStyled>
  );
};
