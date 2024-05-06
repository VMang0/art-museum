import { FC } from 'react';

import { ItemTextStyled, SubTitleStyled } from '@styled/components/typography';
import { theme } from '@styled/theme';
import { FullArtType } from '@types/art';

import { ArtInfoWrapperStyled, ArtPartInfoWrapperStyled, ArtSecondPartInfoWrapperStyled } from './styled';

export const ArtInfo: FC<{ data: FullArtType }> = ({ data }) => {
  const { fontWeight, fontSizes, colors } = theme;
  const orangeTextColor = colors.orange.light;
  const { title, dates, artist, repository, nationality, credits, dimensions, domain } = data;

  return (
    <ArtInfoWrapperStyled>
      <ArtPartInfoWrapperStyled>
        <SubTitleStyled $align="start">{title}</SubTitleStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s24}>
          {artist}
        </ItemTextStyled>
        <ItemTextStyled $weight={fontWeight.bold} fontSize={fontSizes.s16}>
          {dates}
        </ItemTextStyled>
      </ArtPartInfoWrapperStyled>

      <ArtSecondPartInfoWrapperStyled>
        <SubTitleStyled $align="start">Overview</SubTitleStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s16}>
          Artist nationality:
          <ItemTextStyled>{nationality}</ItemTextStyled>
        </ItemTextStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s16}>
          Dimensions:
          <ItemTextStyled>{dimensions}</ItemTextStyled>
        </ItemTextStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s16}>
          Credit Line:
          <ItemTextStyled>{credits}</ItemTextStyled>
        </ItemTextStyled>
        <ItemTextStyled color={orangeTextColor} fontSize={fontSizes.s16}>
          Repository:
          <ItemTextStyled>{repository}</ItemTextStyled>
        </ItemTextStyled>
        <ItemTextStyled fontSize={fontSizes.s16}>{domain}</ItemTextStyled>
      </ArtSecondPartInfoWrapperStyled>
    </ArtInfoWrapperStyled>
  );
};
