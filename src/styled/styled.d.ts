import 'styled-components';
import { ThemeType } from '@types/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
