import styled from 'styled-components';

type TextType = {
  family?: string;
  color?: string;
  size?: string;
};

export const TitleStyled = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s64};
`;

export const TextStyled = styled.span<TextType>`
  text-align: center;
  font-family: ${({ theme, family }) => theme.fonts[family] || theme.fonts.main};
  color: ${({ theme, color }) => theme.colors.white[color] || theme.colors.white.primary};
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes.s16};
`;
