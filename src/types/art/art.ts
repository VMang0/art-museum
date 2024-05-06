export type ResponseFullArtType = {
  id: number;
  title: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  image_id: string;
  date_display: string;
  place_of_origin: string;
  artist_title: string;
  is_public_domain: boolean;
  dimensions: string;
  credit_line: string;
  gallery_title: string;
};

export type FullArtType = {
  id: number;
  title: string;
  thumbnail: ThumbnailType;
  imageId: string;
  dates: string;
  nationality: string;
  artist: string;
  domain: 'Public' | 'Private';
  dimensions: string;
  credits: string;
  repository: string;
};

export type ResponseArtType = {
  id: number;
  title: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  image_id: string;
  artist_title: string;
  is_public_domain: boolean;
};

export type ArtType = {
  id: number;
  title: string;
  thumbnail: ThumbnailType;
  imageId: string;
  artist: string;
  domain: 'Public' | 'Private';
};

export type ThumbnailType = {
  code: string;
  alt_text: string;
};
