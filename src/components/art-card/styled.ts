import { CardSize } from '@constants/card-size';
import styled from 'styled-components';

export const ArtInfoStyled = styled.div`
  cursor: pointer;
  bottom: 0;
  height: 8.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  width: ${({ theme }) => theme.width.full};
  gap: ${({ theme }) => theme.gaps.g16};
  background: ${({ theme }) => theme.colors.white.primary};
  border: 1px solid ${({ theme }) => theme.colors.white.lighter};
  max-width: ${({ size }) => (size === CardSize.SMALL ? 'auto' : '20.875rem')};
  position: ${({ size }) => (size === CardSize.SMALL ? 'block' : 'absolute')};
  padding: ${({ size }) => (size === CardSize.SMALL ? '19px 13px' : ' 17px 24px')};
`;
