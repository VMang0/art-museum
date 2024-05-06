import { ArtType, FullArtType, ResponseArtType, ResponseFullArtType } from '@types/art';

const noInfo: string = 'No information';

export const wrappedFullArtObject = (response: ResponseFullArtType): FullArtType => ({
  id: response.id,
  title: response.title || noInfo,
  thumbnail: {
    code: response.thumbnail?.lqip || '',
    alt_text: response.thumbnail?.alt_text || '',
  },
  imageId: response.image_id,
  dates: response.date_display || noInfo,
  nationality: response.place_of_origin || noInfo,
  artist: response.artist_title || noInfo,
  domain: response.is_public_domain ? 'Public' : 'Private',
  dimensions: response.dimensions || noInfo,
  credits: response.credit_line || noInfo,
  repository: response.gallery_title || noInfo,
});

export const wrappedArtObject = (response: ResponseArtType): ArtType => ({
  id: response.id,
  title: response.title || noInfo,
  thumbnail: {
    code: response.thumbnail?.lqip || '',
    alt_text: response.thumbnail?.alt_text || '',
  },
  imageId: response.image_id,
  artist: response.artist_title || noInfo,
  domain: response.is_public_domain ? 'Public' : 'Private',
});
