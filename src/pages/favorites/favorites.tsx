import { SmallCardsContainer } from '@components/small-cards-container';
import { Subtitle } from '@components/subtitle';
import { FavoritesTitle } from '@pages/favorites/favorites-title';
import { SectionWrapperStyled } from '@styled/components/layout';

const segment2 = 'Saved by you';
const description2 = 'Your favorites list';

export const Favorites = () => (
  <>
    <FavoritesTitle />
    <SectionWrapperStyled>
      <Subtitle segment={segment2} description={description2} />
      <SmallCardsContainer />
    </SectionWrapperStyled>
  </>
);
