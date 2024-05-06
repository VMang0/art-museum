import { FC } from 'react';

import { ArtSmallCard } from '@components/art-card/art-small-card';
import { GridContainerStyled } from '@styled/components/grid';
import { ArtType } from '@types/art';

type SmallCardsContainerPropsType = {
  data: ArtType[];
};

export const SmallCardsContainer: FC<SmallCardsContainerPropsType> = ({ data }) => (
  <GridContainerStyled $gap="1rem">
    {data && data.map((item, index) => <ArtSmallCard key={index} art={item} />)}
  </GridContainerStyled>
);
