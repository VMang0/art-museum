import { device } from '@styled/break-points';
import styled from 'styled-components';

export const ContentWrapperStyled = styled.div`
  max-width: ${({ theme }) => theme.width.main};
  padding: ${({ theme }) => `0 ${theme.padding.p50}`};
  margin: 0 auto;
  @media (${device.sm}) {
    padding: ${({ theme }) => `0 ${theme.padding.p20}`};
  }
  @media (${device.xs}) {
    padding: ${({ theme }) => `0 ${theme.padding.p15}`};
  }
`;

export const PageWrapperStyled = styled.main``;
