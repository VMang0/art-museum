import { FC, memo, useCallback, useEffect, useState } from 'react';

import { ButtonArrow } from '@components/pagination/button-arrow';
import { ButtonPage } from '@components/pagination/button-page';

import { ButtonPageContainerStyled, PaginationContainerStyled, PaginationWrapperStyled } from './styled';

const NUMBER_PAGE_ITEMS = 4;

type PaginationPropsType = {
  lastPage: number;
  activePage: number;
  setActivePage: (value: number) => void;
};

export const Pagination: FC<PaginationPropsType> = memo(({ lastPage, activePage, setActivePage }) => {
  const [buttonItems, setButtonItems] = useState<number[]>([]);
  const [currentFirst, setCurrentFirst] = useState<number>(1);

  const getPaginationItems = useCallback(
    (current: number) => {
      const items: number[] = [];
      for (let i = 0; i < NUMBER_PAGE_ITEMS; i++) {
        const nextNumber = current + i;
        if (nextNumber <= lastPage) {
          items.push(nextNumber);
        }
      }
      return items;
    },
    [lastPage],
  );

  const changeCurrentFirst = (number: number): void => {
    setCurrentFirst(number);
    setActivePage(number);
  };

  useEffect(() => {
    const newButtonItems = getPaginationItems(currentFirst);
    setButtonItems(newButtonItems);
  }, [currentFirst, getPaginationItems, lastPage]);

  return (
    <PaginationWrapperStyled>
      <PaginationContainerStyled>
        <ButtonArrow
          isVisible={currentFirst !== 1}
          currentFirst={currentFirst}
          changeCurrentFirst={changeCurrentFirst}
          variant="previous"
        />
        <ButtonPageContainerStyled>
          {buttonItems.map((pageNum) => (
            <ButtonPage key={pageNum} number={pageNum} activePage={activePage} setActivePage={setActivePage} />
          ))}
        </ButtonPageContainerStyled>
        <ButtonArrow
          isVisible={lastPage - currentFirst > 3}
          currentFirst={currentFirst}
          changeCurrentFirst={changeCurrentFirst}
          variant="next"
        />
      </PaginationContainerStyled>
    </PaginationWrapperStyled>
  );
});
