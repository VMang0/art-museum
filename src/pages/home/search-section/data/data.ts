import { object, string } from 'yup';

export const validationSchema = object().shape({
  query: string()
    .matches(/^[a-zA-Z\s]+$/, 'Query must contain only English letters and spaces')
    .min(3, 'Query must be at least 3 characters')
    .max(50, 'Query must not exceed 50 characters')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Query must not contain special characters')
    .required('Query is required'),
});

export const defaultInputProps = {
  type: 'search',
  name: 'query',
  id: 'search',
  placeholder: 'Search art, artist, work...',
  autoComplete: 'off',
};
