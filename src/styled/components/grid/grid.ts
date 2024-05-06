import { device } from '@styled/break-points';
import styled from 'styled-components';

export const GridContainerStyled = styled.div`
  display: grid;
  justify-items: center;
  justify-content: space-between;
  width: ${({ theme }) => theme.width.full};
  gap: ${({ theme, $gap }) => $gap || theme.gaps.g40};
  grid-template-columns: repeat(auto-fill, minmax(20.625rem, 1fr));
  @media (${device.lg}) {
    justify-content: space-around;
  }
`;
