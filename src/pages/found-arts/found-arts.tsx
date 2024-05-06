import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '@assets/icons/loader.svg?react';
import { ErrorBoundary } from '@components/error-boundary';
import { Pagination } from '@components/pagination';
import { SmallCardsContainer } from '@components/small-cards-container';
import { Subtitle } from '@components/subtitle';
import { SortField } from '@pages/found-arts/sort-field';
import { useLazyGetSearchArtsQuery } from '@redux/api/art-api';
import { SectionWrapperStyled } from '@styled/components/layout';

const segment = 'Explore your interests';
const description = 'A Curated Collection Just for You';

export const FoundArts = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('');
  const { query } = useParams();
  const [getSearchArts, results] = useLazyGetSearchArtsQuery();

  useEffect(() => {
    getSearchArts({ limit: 15, page: activePage, query, sortBy });
  }, [activePage, getSearchArts, query, sortBy]);

  const { data, isLoading } = results;

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleResetSort = () => {
    setSortBy('');
  };

  return (
    <ErrorBoundary>
      <SectionWrapperStyled>
        <Subtitle segment={segment} description={description} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <SortField handleSortChange={handleSortChange} handleResetSort={handleResetSort} sortBy={sortBy} />
            {data?.arts && data?.arts.length > 0 && <SmallCardsContainer data={data.arts} />}
            {data && data?.totalPages !== 1 && (
              <Pagination lastPage={data?.totalPages} activePage={activePage} setActivePage={setActivePage} />
            )}
          </>
        )}
      </SectionWrapperStyled>
    </ErrorBoundary>
  );
};
