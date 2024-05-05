type ColorsType = {
  orange: {
    bright: '#F17900';
    light: '#E0A449';
  };
  white: {
    primary: '#FFFFFF';
    light: '#F9F9F9';
    lighter: '#F0F1F1';
    extraLight: '#FAFAFA';
  };
  blue: '#2C3144';
  grey: '#393939';
  gradient: {
    light: 'rgba(251, 215, 178, 0.3)';
    medium: 'rgba(57, 57, 57, 0.5)';
    lightest: 'rgba(57, 57, 57, 0.05)';
    main: 'linear-gradient(90deg, #343333 16.73%, #484848 58.63%, #282828 98.63%)';
  };
};

type FontType = {
  main: 'Inter, sans-serif';
  secondary: 'Lexend Deca, sans-serif';
};

type FontSizesType = {
  s64: '4rem';
  s63: '3.938rem';
  s40: '2.5rem';
  s32: '2rem';
  s24: '1.5rem';
  s28: '1.75rem';
  s18: '1.125rem';
  s17: '1.096rem';
  s16: '1em';
  s15: '0.938rem';
  s14: '0.875rem';
};

type FontWeightType = {
  light: 300;
  regular: 400;
  medium: 500;
  semiBold: 600;
  bold: 700;
};

type GapsType = {
  g4: '0.25rem';
  g10: '0.625rem';
  g16: '1rem';
  g25: '1.563rem';
  g30: '2.5rem';
  g40: '2.5rem';
  g72: '4.5rem';
};

type TranslatesType = {
  active: 'translateX(0)';
  notActive: 'translateX(100%)';
};

type WidthType = {
  full: '100%';
  fullVW: '100vw';
  main: '1280px';
  w762: '47.625rem';
  w160: '10rem';
  w60p: '60%';
  w50p: '50%';
};

type HeightType = {
  full: '100%';
  fullVH: '100vh';
};

type PaddingType = {
  p50: '3.125rem';
  p20: '1.25rem';
  p32: '2rem';
  p30: '1.875rem';
  p16: '1rem';
  p15: '0.938rem';
};

type BorderRadiusType = {
  r16: '1rem';
};

export type ThemeType = {
  colors: ColorsType;
  fonts: FontType;
  fontSizes: FontSizesType;
  fontWeight: FontWeightType;
  gaps: GapsType;
  translates: TranslatesType;
  width: WidthType;
  padding: PaddingType;
  height: HeightType;
  borderRadius: BorderRadiusType;
};
