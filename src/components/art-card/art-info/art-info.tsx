import { FC } from 'react';
import { ArtInfoWrapperStyle } from '@components/art-card/art-info/styled';
import { CardSize } from '@constants/card-size';
import { ItemTextStyled } from '@styled/components/typography';
import { theme } from '@styled/theme';

type ArtInfoPropsType = {
  size?: CardSize.SMALL | CardSize.BIG | undefined;
  id: number;
  title: string;
  artist: string;
  domain: 'Public' | 'Private';
};

export const ArtInfo: FC<ArtInfoPropsType> = ({ size = CardSize.BIG, title, artist, domain }) => {
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
        {artist}
      </ItemTextStyled>
      <ItemTextStyled $family={fontFamily} $weight={fontWeight.bold}>
        {domain}
      </ItemTextStyled>
    </ArtInfoWrapperStyle>
  );
};
