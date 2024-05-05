import { ArtInfoWrapperStyle } from '@components/art-card/art-info/styled';
import { CardSize } from '@constants/card-size';
import { ItemTextStyled } from '@styled/components/typography';
import { theme } from '@styled/theme';

export const ArtInfo = ({ size = CardSize.BIG, artist_title, is_public_domain, title }) => {
  const { fontWeight, fontSizes, colors, fonts } = theme;
  const fontFamily = size === CardSize.SMALL ? fonts.main : '';

  return (
    <ArtInfoWrapperStyle>
      <ItemTextStyled
        $family={fontFamily}
        $weight={fontWeight.medium}
        fontSize={fontSizes.s17}
        $lineheight={150}
        spacing={-0.03}
      >
        {title}
      </ItemTextStyled>
      <ItemTextStyled $family={fontFamily} color={colors.orange.light}>
        {artist_title}
      </ItemTextStyled>
      <ItemTextStyled $family={fontFamily} $weight={fontWeight.bold}>
        {is_public_domain ? 'Public' : 'Private'}
      </ItemTextStyled>
    </ArtInfoWrapperStyle>
  );
};
