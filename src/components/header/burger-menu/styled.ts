import { device } from '@styled/break-points';
import styled from 'styled-components';

export const BurgerMenuStyled = styled.div<{ $menuState: boolean }>`
  top: 0;
  right: 0;
  position: fixed;
  transition: all 0.4s;
  width: ${({ theme }) => theme.width.fullVW};
  height: ${({ theme }) => theme.height.fullVH};
  transform: ${({ $menuState, theme }) => ($menuState ? theme.translates.active : theme.translates.notActive)};
`;

export const BlurStyled = styled.div`
  position: absolute;
  backdrop-filter: blur(2px);
  width: ${({ theme }) => theme.width.fullVW};
  height: ${({ theme }) => theme.height.fullVH};
`;

export const BurgerMenuContentStyled = styled.div`
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.g40};
  width: ${({ theme }) => theme.width.w50p};
  height: ${({ theme }) => theme.height.full};
  padding: ${({ theme }) => theme.padding.p30};
  background-color: ${({ theme }) => theme.colors.grey};
  @media (${device.xs}) {
    width: ${({ theme }) => theme.width.w60p};
  }
`;
