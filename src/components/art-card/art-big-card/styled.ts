import styled from 'styled-components';

export const ArtBigCardStyled = styled.article`
  height: 32.125rem;
  max-width: 24.188rem;
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: center;
  width: ${({ theme }) => theme.width.full};
`;
