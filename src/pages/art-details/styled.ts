import { device } from '@styled/break-points';
import styled from 'styled-components';

export const ArtDetailsWrapperStyled = styled.div`
  gap: 5rem;
  display: flex;
  flex-direction: row;
  width: ${({ theme }) => theme.width.full};
  @media (${device.md}) {
    align-items: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.gaps.g40};
  }
`;
