import styled from 'styled-components';

export const SaveButtonStyled = styled.button`
  border: none;
  width: 3.688rem;
  height: 3.688rem;
  min-width: 3.688rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${({ theme, color }) => color || theme.colors.white.light};
  path {
    stroke: ${({ theme }) => theme.colors.orange.bright};
  }
`;
