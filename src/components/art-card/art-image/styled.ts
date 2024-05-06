import { CardSize } from '@constants/card-size/card-size';
import styled from 'styled-components';

type ArtImagePropsTyped = {
  size?: CardSize.BIG | CardSize.SMALL | undefined;
};

export const ArtImageStyled = styled.img<ArtImagePropsTyped>`
  width: ${({ theme, size }) => (size === CardSize.SMALL ? '5rem' : theme.width.full)};
  height: ${({ size }) => (size === CardSize.SMALL ? '5rem' : '27.75rem')};
  object-fit: cover;
`;

export const ArtNoImageStyled = styled(ArtImageStyled)`
  object-fit: contain;
`;
