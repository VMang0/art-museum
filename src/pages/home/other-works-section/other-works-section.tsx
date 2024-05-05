import { SmallCardsContainer } from '@components/small-cards-container';
import { Subtitle } from '@components/subtitle';
import { SectionWrapperStyled } from '@styled/components/layout';

const segment2 = 'Here some more';
const description2 = 'Other works for you';

export const OtherWorksSection = () => (
  <SectionWrapperStyled>
    <Subtitle segment={segment2} description={description2} />
    <SmallCardsContainer />
  </SectionWrapperStyled>
);
