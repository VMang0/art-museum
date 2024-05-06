import styled from 'styled-components';

export const SortFieldStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1.25rem;
`;

export const SelectStyled = styled.select`
  padding: 0.625rem 0.813rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white.primary};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizes.s15};
`;

export const ResetButtonStyled = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white.primary};
  padding: 0.313rem 0.625rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.s16};
  transition: all 0.3s;
  max-width: 9.375rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white.primary};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
