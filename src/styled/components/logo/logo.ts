import ModsenLogo from '@assets/icons/logo-modsen.svg?react';
import MuseumLogo from '@assets/icons/museum-logo.svg?react';
import { device } from '@styled/break-points';
import styled from 'styled-components';

export const MuseumLogoStyled = styled(MuseumLogo)<{ mode: string }>`
  path:first-child {
    fill: ${({ theme, mode }) => (mode === 'dark' ? theme.colors.grey : theme.colors.white.primary)};
  }
  @media (${device.sm}) {
    width: ${({ theme }) => theme.width.w160};
  }
`;

export const ModsenLogoStyled = styled(ModsenLogo)`
  @media (${device.sm}) {
    width: 120px;
  }
`;
