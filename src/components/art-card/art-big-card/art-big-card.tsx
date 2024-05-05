import { ArtImage } from '@components/art-card/art-image';
import { ArtInfo } from '@components/art-card/art-info';
import { ArtInfoStyled } from '@components/art-card/styled';
import { SaveButton } from '@components/save-button';
import { CardSize } from '@constants/card-size';
import { useNavigateToArt } from '@hooks/navigate-to-art';

import { ArtBigCardStyled } from './styled';

export const ArtBigCard = ({ art }) => {
  const navigate = useNavigateToArt();
  const { id, image_id, ...data } = art;
  return (
    <ArtBigCardStyled onClick={() => navigate(id)}>
      <ArtImage size={CardSize.BIG} path={image_id} />
      <ArtInfoStyled>
        <ArtInfo {...data} />
        <SaveButton />
      </ArtInfoStyled>
    </ArtBigCardStyled>
  );
};
