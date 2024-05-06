import { useEffect, useState } from 'react';

import { device } from '@styled/break-points';

export const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.matchMedia(`(${device.sm})`).matches;
      setIsSmallScreen(isSmall);
    };

    checkScreenSize();
    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isSmallScreen };
};
