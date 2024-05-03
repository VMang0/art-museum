import BookmarkIcon from '@assets/icons/bookmark.svg?react';
import HomeIcon from '@assets/icons/home.svg?react';
import { NavBarStyled, LinkItemStyled, LinkGroupStyled, LinkStyled } from '@components/navbar/styled';
import { TextStyled } from '@styled/components/typography';

export const Navbar = () => {
  return (
    <NavBarStyled>
      <LinkGroupStyled>
        <LinkItemStyled>
          <LinkStyled>
            <HomeIcon />
            <TextStyled size="s18">Home</TextStyled>
          </LinkStyled>
        </LinkItemStyled>
        <LinkItemStyled>
          <LinkStyled>
            <BookmarkIcon />
            <TextStyled size="s18">Your favorites</TextStyled>
          </LinkStyled>
        </LinkItemStyled>
      </LinkGroupStyled>
    </NavBarStyled>
  );
};
