import { device } from '@styled/break-points';
import styled from 'styled-components';

type TextType = {
  $family?: string;
  color?: string;
  fontSize?: string;
  weight?: number;
  $lineheight?: number;
  spacing?: number;
};

export const TitleStyled = styled.h1`
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s64};
  font-weight: ${({ theme, weight }) => theme.fontWeight[weight] || theme.fontWeight.bold};
  max-width: 680px;
  span {
    color: ${({ theme }) => theme.colors.orange.bright};
  }
  @media (${device.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.s40};
  }
`;

export const SubTitleStyled = styled.h3`
  text-align: ${({ $align }) => $align || 'center'};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s32};
  font-weight: ${({ theme, weight }) => theme.fontWeight[weight] || theme.fontWeight.regular};
`;

export const TextStyled = styled.span<TextType>`
  text-align: center;
  font-weight: ${({ theme, $weight }) => $weight || theme.fontWeight.regular};
  font-family: ${({ theme, $family }) => $family || theme.fonts.main};
  color: ${({ theme, color }) => color || theme.colors.white.primary};
  font-size: ${({ theme, size }) => size || theme.fontSizes.s16};
`;

export const ItemTextStyled = styled(TextStyled)`
  text-align: left;
  font-family: ${({ theme, $family }) => $family || theme.fonts.secondary};
  color: ${({ theme, color }) => color || theme.colors.grey};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizes.s15};
  line-height: ${({ $lineheight }) => ($lineheight ? `${$lineheight}%` : '168%')};
  letter-spacing: ${({ spacing }) => (spacing ? `${spacing}em` : '-0.01em')};
`;
