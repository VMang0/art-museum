import { device } from '@styled/break-points';
import { TitleStyled } from '@styled/components/typography';
import styled from 'styled-components';

export const FavoritesTitleStyled = styled(TitleStyled)`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.gaps.g4};
  }
  & svg {
    width: 3.625rem;
    height: 3.625rem;
  }
  & path {
    stroke: ${({ theme }) => theme.colors.orange.bright};
  }
  @media (${device.sm}) {
    & svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
