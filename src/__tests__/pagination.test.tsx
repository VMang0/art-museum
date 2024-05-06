import { Pagination } from '@components/pagination';
import { render, fireEvent } from '@testing-library/react';

describe('Pagination', () => {
  it('should render correct number of page buttons', () => {
    const { getByTestId } = render(<Pagination lastPage={10} activePage={1} setActivePage={() => {}} />);
    const paginationContainer = getByTestId('pagination-container');
    expect(paginationContainer.children.length).toBe(3);
  });

  it('should call setActivePage with correct page number when page button is clicked', () => {
    const mockSetActivePage = jest.fn();
    const { getByText } = render(<Pagination lastPage={10} activePage={1} setActivePage={mockSetActivePage} />);
    const page2Button = getByText('2');
    fireEvent.click(page2Button);
    expect(mockSetActivePage).toHaveBeenCalledWith(2);
  });
});
