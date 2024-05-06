import { device } from '@styled/break-points';
import styled from 'styled-components';

export const ContentWrapperStyled = styled.div`
  gap: 7.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: ${({ theme }) => theme.width.main};
  padding: ${({ theme }) => `0 ${theme.padding.p50}`};
  @media (${device.sm}) {
    gap: 3.75rem;
    padding: ${({ theme }) => `0 ${theme.padding.p20}`};
  }
  @media (${device.xs}) {
    padding: ${({ theme }) => `0 ${theme.padding.p15}`};
  }
`;

export const PageWrapperStyled = styled.main`
  padding: 7.5rem 0;
  @media (${device.sm}) {
    padding: 4.375rem 0;
  }
`;

export const SectionWrapperStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${({ theme }) => theme.width.full};
  gap: ${({ theme, $gap }) => $gap || theme.gaps.g40};
  @media (${device.xs}) {
    gap: ${({ theme }) => theme.gaps.g25};
  }
`;
