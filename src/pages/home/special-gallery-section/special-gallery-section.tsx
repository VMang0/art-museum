import { ArtBigCard } from '@components/art-card/art-big-card';
import { Subtitle } from '@components/subtitle';
import { GridContainerStyled } from '@styled/components/grid';
import { SectionWrapperStyled } from '@styled/components/layout';

import { useGetArtsQuery } from '../../../store/api/art-api';

const segment = 'Topics for you';
const description = 'Our special gallery';

export const SpecialGallerySection = () => {
  const { data } = useGetArtsQuery(3);
  const arts = data?.data;

  return (
    <SectionWrapperStyled>
      <Subtitle segment={segment} description={description} />
      <GridContainerStyled>
        {arts && Array.isArray(arts) && arts.map((item) => <ArtBigCard art={item} key={item.id} />)}
      </GridContainerStyled>
    </SectionWrapperStyled>
  );
};
