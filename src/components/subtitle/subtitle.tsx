import { FC, memo } from 'react';

import { SubtitleStyled } from '@components/subtitle/styled';
import { TextStyled, SubTitleStyled } from '@styled/components/typography';
import { theme } from '@styled/theme';

type SubtitlePropsType = {
  segment: string;
  description: string;
};

export const Subtitle: FC<SubtitlePropsType> = memo(({ segment, description }) => (
  <SubtitleStyled>
    <TextStyled color={theme.colors.orange.light} $family={theme.fonts.secondary}>
      {segment}
    </TextStyled>
    <SubTitleStyled>{description}</SubTitleStyled>
  </SubtitleStyled>
));
