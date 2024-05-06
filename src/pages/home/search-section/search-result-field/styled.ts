import styled from 'styled-components';

export const SearchResultFieldContainerStyled = styled.div`
  position: absolute;
  top: 74px;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white.lighter};
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const SearchResultFieldStyled = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

export const ShowAllButtonStyled = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white.primary};
  padding: 13px 20px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.s16};
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white.primary};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
