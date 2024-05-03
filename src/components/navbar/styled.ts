import { Link } from 'react-router-dom';

import { device } from '@styled/break-points';
import styled from 'styled-components';

export const NavBarStyled = styled.nav``;

export const LinkGroupStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: ${({ theme }) => theme.gaps.g25};
  @media (${device.sm}) {
    flex-direction: column;
  }
`;

export const LinkItemStyled = styled.li`
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.g4};
  @media (${device.sm}) {
    gap: ${({ theme }) => theme.gaps.g25};
  }
`;
