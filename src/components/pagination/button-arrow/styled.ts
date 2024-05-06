import styled from 'styled-components';

export const ButtonArrowStyled = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  transform: rotate(${({ $variant }) => ($variant === 'previous' ? '180deg' : '0')});
  &:focus {
    border: none;
    background-color: transparent;
  }
  path {
    transition: fill 0.3s;
  }
  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.orange.bright};
    }
  }
`;
