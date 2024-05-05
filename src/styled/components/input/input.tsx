import SearchIcon from '@assets/icons/search-icon.svg?react';
import styled from 'styled-components';

const InputStyled = styled.input`
  height: 2rem;
  border: none;
  box-sizing: content-box;
  outline: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.r16};
  background-color: ${({ theme }) => theme.colors.gradient.lightest};
  width: calc(${({ theme }) => `${theme.width.full} - ${theme.padding.p16} - ${theme.padding.p50}`});
  padding: ${({ theme }) => `${theme.padding.p16} ${theme.padding.p50} ${theme.padding.p16} ${theme.padding.p16}`};
  transition: outline 0.3s;
  &,
  &::placeholder {
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.s14};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.orange.bright};
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }
`;

const InputWrapperStyled = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.width.w762};
  width: ${({ theme }) => theme.width.full};
  box-sizing: border-box;
  & > svg {
    top: 1rem;
    right: 1rem;
    position: absolute;
  }
`;

export const Input = (props) => (
  <InputWrapperStyled>
    <SearchIcon />
    <InputStyled {...props} />
  </InputWrapperStyled>
);
