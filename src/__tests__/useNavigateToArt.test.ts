import { useNavigate } from 'react-router-dom';
import { useNavigateToArt } from '../hooks/navigate-to-art';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('useNavigateToArt', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should navigate to the correct art id', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    const navigateToArt = useNavigateToArt();
    const id = 123;
    navigateToArt(id);
    expect(mockNavigate).toHaveBeenCalledWith(`/art/${id}`);
  });

  it('should navigate to the correct art id when called multiple times', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    const navigateToArt = useNavigateToArt();
    const id1 = 123;
    const id2 = 456;
    navigateToArt(id1);
    navigateToArt(id2);
    expect(mockNavigate).toHaveBeenNthCalledWith(1, `/art/${id1}`);
    expect(mockNavigate).toHaveBeenNthCalledWith(2, `/art/${id2}`);
  });

  it('should navigate to the correct art id with different inputs', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    const navigateToArt = useNavigateToArt();
    navigateToArt(123);
    expect(mockNavigate).toHaveBeenCalledWith(`/art/123`);
    navigateToArt(456);
    expect(mockNavigate).toHaveBeenCalledWith(`/art/456`);
    navigateToArt(789);
    expect(mockNavigate).toHaveBeenCalledWith(`/art/789`);
  });
});
