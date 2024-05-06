import { useState } from 'react';

import Loader from '@assets/icons/loader.svg?react';
import { ArtBigCard } from '@components/art-card/art-big-card';
import { Pagination } from '@components/pagination';
import { Subtitle } from '@components/subtitle';
import { useGetArtsQuery } from '@redux/api/art-api';
import { GridContainerStyled } from '@styled/components/grid';
import { SectionWrapperStyled } from '@styled/components/layout';

const segment = 'Topics for you';
const description = 'Our special gallery';

export const SpecialGallerySection = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const { data, isLoading } = useGetArtsQuery({ limit: 3, page: activePage });

  return (
    <SectionWrapperStyled>
      <Subtitle segment={segment} description={description} />
      {isLoading ? (
        <Loader />
      ) : (
        <GridContainerStyled>
          {data?.arts && data?.arts.map((item) => <ArtBigCard art={item} key={item.id} />)}
        </GridContainerStyled>
      )}
      {data && data?.totalPages !== 1 && (
        <Pagination lastPage={data?.totalPages} activePage={activePage} setActivePage={setActivePage} />
      )}
    </SectionWrapperStyled>
  );
};
