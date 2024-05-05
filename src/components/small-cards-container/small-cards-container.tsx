import { ArtSmallCard } from '@components/art-card/art-small-card';
import { GridContainerStyled } from '@styled/components/grid';
import { useGetArtsQuery } from '../../store/api/art-api';

export const SmallCardsContainer = () => {
  const { data } = useGetArtsQuery(9);
  const arts = data?.data;

  return (
    <GridContainerStyled $gap="16px">
      {arts && arts.map((item, index) => <ArtSmallCard key={index} art={item} />)}
    </GridContainerStyled>
  );
};
