import { SearchInput } from '@components/search-input';
import { SectionWrapperStyled } from '@styled/components/layout';
import { TitleStyled } from '@styled/components/typography';
import { theme } from '@styled/theme';

export const SearchSection = () => (
  <SectionWrapperStyled $gap={theme.gaps.g72}>
    <TitleStyled>
      Let&apos;s find some <span>art</span> here!
    </TitleStyled>
    <SearchInput />
  </SectionWrapperStyled>
);
