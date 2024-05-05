import styled from 'styled-components';

export const ArtImageStyled = styled.img`
  max-width: 31.063rem;
  max-height: 35.625rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ArtNoImageStyled = styled(ArtImageStyled)`
  object-fit: contain;
`;
