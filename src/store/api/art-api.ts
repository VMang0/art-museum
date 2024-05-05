import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const artsApi = createApi({
  reducerPath: 'arts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1/artworks',
  }),
  endpoints: (builder) => ({
    getArts: builder.query({
      query: (limit) => `?fields=id,title,image_id,artist_title,is_public_domain&limit=${limit}&page=2`,
    }),
    getArtById: builder.query({
      query: (id) =>
        `${id}?fields=id,title,thumbnail,image_id,date_display,place_of_origin,artist_title,is_public_domain,dimensions,credit_line,gallery_title`,
    }),
  }),
});

export const { useGetArtsQuery, useGetArtByIdQuery } = artsApi;
