import { device } from '@styled/break-points';
import { ContentWrapperStyled } from '@styled/components/layout';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: ${({ theme }) => `${theme.padding.p32} 0`};
  background: ${({ theme }) => theme.colors.gradient.main};
  @media (${device.sm}) {
    padding: ${({ theme }) => `${theme.padding.p15} 0`};
  }
`;

export const HeaderWrapperStyled = styled(ContentWrapperStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
