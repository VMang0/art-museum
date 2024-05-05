import { ArtImage } from '@components/art-card/art-image';
import { ArtInfo } from '@components/art-card/art-info';
import { ArtInfoStyled } from '@components/art-card/styled';
import { SaveButton } from '@components/save-button';
import { CardSize } from '@constants/card-size';
import { useNavigateToArt } from '@hooks/navigate-to-art';

export const ArtSmallCard = ({ art }) => {
  const navigate = useNavigateToArt();
  const { id, image_id, ...data } = art;

  return (
    <ArtInfoStyled size={CardSize.SMALL} onClick={() => navigate(id)}>
      <ArtImage size={CardSize.SMALL} path={image_id} />
      <ArtInfo size={CardSize.SMALL} {...data} />
      <SaveButton />
    </ArtInfoStyled>
  );
};
