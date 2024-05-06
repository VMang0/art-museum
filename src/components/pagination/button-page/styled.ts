import styled from 'styled-components';

export const ButtonPageStyled = styled.button`
  color: ${({ theme, $active }) => ($active ? theme.colors.white.primary : theme.colors.grey)};
  border: none;
  padding: 0.188rem 0.625rem;
  border-radius: 0.25rem;
  height: 1.875rem;
  min-width: 1.875rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  background-color: ${({ theme, $active }) => ($active ? theme.colors.orange.bright : 'transparent')};
  font-size: ${({ theme }) => theme.fontSizes.s18};
  font-weight: ${({ theme, $active }) => ($active ? theme.fontWeight.semiBold : theme.fontWeight.light)};
`;
