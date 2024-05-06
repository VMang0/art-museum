import { ErrorBoundary } from '@components/error-boundary';
import { OtherWorksSection } from '@pages/home/other-works-section';
import { SearchSection } from '@pages/home/search-section';
import { SpecialGallerySection } from '@pages/home/special-gallery-section';

export const Home = () => (
  <ErrorBoundary>
    <SearchSection />
    <SpecialGallerySection />
    <OtherWorksSection />
  </ErrorBoundary>
);
