import styled from 'styled-components';

export const ArtInfoWrapperStyled = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.g30};
  width: ${({ theme }) => theme.width.full};
`;

export const ArtPartInfoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps.g10};
  :first-child {
    margin-bottom: 1.063rem;
  }
`;

export const ArtSecondPartInfoWrapperStyled = styled(ArtPartInfoWrapperStyled)`
  margin-top: auto;
`;
