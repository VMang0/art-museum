import styled from 'styled-components';

export const ArtInfoWrapperStyle = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  flex-direction: column;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:nth-child(3) {
    margin-top: auto;
  }
`;
