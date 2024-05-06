import { createApi, EndpointBuilder, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArtType, FullArtType, ResponseArtType, ResponseFullArtType } from '../../types/art';
import { wrappedArtObject, wrappedFullArtObject } from '../object-wrapper';

const FIELDS_ONE_ART =
  'id,title,thumbnail,image_id,date_display,place_of_origin,artist_title,is_public_domain,dimensions,credit_line,gallery_title';
const FIELDS_ALL_ARTS = 'id,title,thumbnail,image_id,artist_title,is_public_domain';

type ResponseGetAll = {
  pagination: {
    total_pages: number;
  };
  data: ResponseArtType[];
};
type ResponseGetOne = {
  data: ResponseArtType[] | ResponseFullArtType;
};

type FormattedResponseGetAll = {
  arts: ArtType[];
  totalPages: number;
};

export const artsApi = createApi({
  reducerPath: 'arts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1/artworks',
  }),
  endpoints: (builder: EndpointBuilder<unknown, ResponseType, unknown>) => ({
    getArts: builder.query<FormattedResponseGetAll, { limit: number; page: number }>({
      query: ({ limit = 3, page = 1 }) => `?fields=${FIELDS_ALL_ARTS}&limit=${limit}&page=${page}`,
      transformResponse(response: ResponseGetAll): Promise<FormattedResponseGetAll> | FormattedResponseGetAll {
        return {
          arts: response.data.map((art) => wrappedArtObject(art)),
          totalPages: response.pagination.total_pages,
        };
      },
    }),
    getArtById: builder.query<FullArtType, number>({
      query: (id: number) => `${id}?fields=${FIELDS_ONE_ART}`,
      transformResponse(response: ResponseGetOne): Promise<FullArtType> | FullArtType {
        return wrappedFullArtObject(response.data);
      },
    }),
    getSearchArts: builder.query<
      FormattedResponseGetAll,
      { limit: number; page: number; query: string; sortBy: string }
    >({
      query: ({ limit = 3, page = 1, query = '', sortBy = '' }) =>
        `search?q=${query}${sortBy}&fields=${FIELDS_ALL_ARTS}&limit=${limit}&page=${page}`,
      transformResponse(response: ResponseGetAll): Promise<FormattedResponseGetAll> | FormattedResponseGetAll {
        return {
          arts: response.data.map((art) => wrappedArtObject(art)),
          totalPages: response.pagination.total_pages,
        };
      },
    }),
    getArtsByIds: builder.query<ArtType[], number[]>({
      query: (ids: number[]) => `/?ids=${ids}&fields=${FIELDS_ALL_ARTS}`,
      transformResponse(response: ResponseGetAll): Promise<ArtType[]> | ArtType[] {
        return response.data.map((art) => wrappedArtObject(art));
      },
    }),
  }),
});

export const { useGetArtsQuery, useGetArtByIdQuery, useLazyGetSearchArtsQuery, useGetArtsByIdsQuery } = artsApi;
