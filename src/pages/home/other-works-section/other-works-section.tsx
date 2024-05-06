import Loader from '@assets/icons/loader.svg?react';
import { SmallCardsContainer } from '@components/small-cards-container';
import { Subtitle } from '@components/subtitle';
import { useGetArtsQuery } from '@redux/api/art-api';
import { SectionWrapperStyled } from '@styled/components/layout';

const segment2 = 'Here some more';
const description2 = 'Other works for you';
const randomNumber = Math.floor(Math.random() * 100) + 1;

export const OtherWorksSection = () => {
  const { data, isLoading } = useGetArtsQuery({ limit: 9, page: randomNumber });
  return (
    <SectionWrapperStyled>
      <Subtitle segment={segment2} description={description2} />
      {isLoading ? <Loader /> : <SmallCardsContainer data={data?.arts} />}
    </SectionWrapperStyled>
  );
};
