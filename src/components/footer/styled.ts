import { device } from '@styled/break-points';
import { ContentWrapperStyled } from '@styled/components/layout';
import styled from 'styled-components';

export const FooterStyled = styled.footer`
  margin-top: auto;
  width: ${({ theme }) => theme.width.full};
  padding: ${({ theme }) => `${theme.padding.p32} 0`};
  background: ${({ theme }) => theme.colors.white.primary};
  @media (${device.sm}) {
    padding: ${({ theme }) => `${theme.padding.p15} 0`};
  }
`;

export const FooterWrapperStyled = styled(ContentWrapperStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
