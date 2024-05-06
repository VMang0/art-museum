import { device } from '@styled/break-points';
import styled from 'styled-components';

export const PaginationWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: ${({ theme }) => theme.width.full};
  @media (${device.md}) {
    justify-content: center;
  }
`;

export const PaginationContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.063rem;
`;

export const ButtonPageContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps.g10};
`;
