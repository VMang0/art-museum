import { useNavigate } from 'react-router-dom';

import CrossIcon from '@assets/icons/cross-icon.svg?react';
import Loader from '@assets/icons/loader.svg?react';
import { SmallCardsContainer } from '@components/small-cards-container';
import {
  SearchResultFieldStyled,
  SearchResultFieldContainerStyled,
  ShowAllButtonStyled,
} from '@pages/home/search-section/search-result-field/styled';
import { ItemTextStyled } from '@styled/components/typography';

export const SearchResultField = ({ data, isLoading, closeForm, query }) => {
  const navigate = useNavigate();

  const showAll = () => navigate(`/arts/${query}`);

  return (
    <SearchResultFieldContainerStyled>
      <>
        <CrossIcon onClick={closeForm} />
        <SearchResultFieldStyled>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {data && data.length > 0 && <SmallCardsContainer data={data} />}
              {(!data || data.length === 0) && <ItemTextStyled>Nothing was found</ItemTextStyled>}
            </>
          )}
        </SearchResultFieldStyled>
        {data && data.length >= 10 && <ShowAllButtonStyled onClick={showAll}>Show all</ShowAllButtonStyled>}
      </>
    </SearchResultFieldContainerStyled>
  );
};
