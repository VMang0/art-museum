import { ItemTextStyled, SubTitleStyled } from '@styled/components/typography';
import { theme } from '@styled/theme';

import { ArtInfoWrapperStyled, ArtPartInfoWrapperStyled } from './styled';

export const ArtInfo = ({ data }) => {
  const { fontWeight, fontSizes, colors } = theme;
  const orangeTextColor = colors.orange.light;
  const {
    title,
    date_display,
    place_of_origin,
    artist_title,
    is_public_domain,
    dimensions,
    credit_line,
    gallery_title,
  } = data;

  return (
    <ArtInfoWrapperStyled>
      <ArtPartInfoWrapperStyled>
        <SubTitleStyled $align="start">{title}</SubTitleStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s24}>
          {artist_title}
        </ItemTextStyled>
        <ItemTextStyled $weight={fontWeight.bold} fontSize={fontSizes.s16}>
          {date_display}
        </ItemTextStyled>
      </ArtPartInfoWrapperStyled>

      <ArtPartInfoWrapperStyled>
        <SubTitleStyled $align="start">Overview</SubTitleStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s16}>
          Artist nationality:
          <ItemTextStyled>{place_of_origin}</ItemTextStyled>
        </ItemTextStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s16}>
          Dimensions:
          <ItemTextStyled>{dimensions}</ItemTextStyled>
        </ItemTextStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s16}>
          Credit Line:
          <ItemTextStyled>{credit_line}</ItemTextStyled>
        </ItemTextStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s16}>
          Repository:
          <ItemTextStyled>{gallery_title || 'No information'}</ItemTextStyled>
        </ItemTextStyled>
        <ItemTextStyled fontSize={fontSizes.s16}>{is_public_domain ? 'Public' : 'Private'}</ItemTextStyled>
      </ArtPartInfoWrapperStyled>
    </ArtInfoWrapperStyled>
  );
};
