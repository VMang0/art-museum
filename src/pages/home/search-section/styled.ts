import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  width: ${({ theme }) => theme.width.full};
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.625rem;
  span {
    ${({ theme }) => theme.colors.red};
  }
`;

export const SearchContainerStyled = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.width.w762};
  width: ${({ theme }) => theme.width.full};
`;
