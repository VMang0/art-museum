import { useEffect, useState } from 'react';

import { SearchInput } from '@components/search-input';
import { useDebounce } from '@hooks/debounce';
import { SearchResultField } from '@pages/home/search-section/search-result-field';
import { SearchContainerStyled, SearchFormStyled } from '@pages/home/search-section/styled';
import { useLazyGetSearchArtsQuery } from '@redux/api/art-api';
import { SectionWrapperStyled } from '@styled/components/layout';
import { TextStyled, TitleStyled } from '@styled/components/typography';
import { theme } from '@styled/theme';

import { useFormik } from 'formik';
import { validationSchema, defaultInputProps } from './data';

export const SearchSection = () => {
  const [error, setError] = useState<null | string>(null);
  const [getSearchArts, results] = useLazyGetSearchArtsQuery();
  const [openResult, setOpenResult] = useState(false);

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    validationSchema,
  });

  const debouncedQuery = useDebounce(formik.values.query);

  useEffect(() => {
    if (!formik.errors.query && debouncedQuery) {
      getSearchArts({ limit: 10, page: 1, query: debouncedQuery });
      setOpenResult(true);
      setError(null);
    } else {
      setOpenResult(false);
      setError(formik.errors.query);
    }
  }, [debouncedQuery]);

  const closeForm = () => setOpenResult(false);

  return (
    <SectionWrapperStyled $gap={theme.gaps.g72}>
      <TitleStyled>
        Let&apos;s find some <span>art</span> here!
      </TitleStyled>
      <SearchContainerStyled>
        <SearchFormStyled onSubmit={formik.handleSubmit}>
          <SearchInput {...defaultInputProps} onChange={formik.handleChange} value={formik.values.query} />
          {error ? <TextStyled color={theme.colors.red}>{error}</TextStyled> : null}
        </SearchFormStyled>
        {openResult && !error && (
          <SearchResultField
            data={results?.data?.arts}
            isLoading={results.isLoading}
            closeForm={closeForm}
            query={debouncedQuery}
          />
        )}
      </SearchContainerStyled>
    </SectionWrapperStyled>
  );
};
