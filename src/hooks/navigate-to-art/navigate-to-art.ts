import { useNavigate } from 'react-router-dom';

export const useNavigateToArt = () => {
  const navigate = useNavigate();
  return (id: number) => {
    navigate(`/art/${id}`);
  };
};
