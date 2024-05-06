import { FC } from 'react';
import { ResetButtonStyled, SelectStyled, SortFieldStyled } from '@pages/found-arts/sort-field/styled';

const QUERY_VALUE = '&query[term][is_public_domain]=';

type SortFieldPropsType = {
  handleResetSort: () => void;
  sortBy: string;
};

export const SortField: FC<SortFieldPropsType> = ({ handleSortChange, handleResetSort, sortBy }) => {
  return (
    <SortFieldStyled>
      <SelectStyled id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="" disabled>
          No sorted
        </option>
        <option value={`${QUERY_VALUE}true`}>In public domain</option>
        <option value={`${QUERY_VALUE}false`}>In private domain</option>
      </SelectStyled>
      <ResetButtonStyled onClick={handleResetSort}>Reset Sort</ResetButtonStyled>
    </SortFieldStyled>
  );
};
