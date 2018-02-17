import { Palette } from './types/palette';

export type TextStyle =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4'
  | 'headline'
  | 'title'
  | 'subheading'
  | 'body1'
  | 'body2'
  | 'caption';

export type Style = TextStyle | 'button';
export type FontWeight = "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type CSSPercentage = string;
type CSSLength = number | string;
type LineHeight =  "normal" | CSSLength | CSSPercentage

export interface FontStyle {
  fontFamily: any;
  fontSize: any;
  fontWeightLight: FontWeight;
  fontWeightRegular: FontWeight;
  fontWeightMedium: FontWeight;
  htmlFontSize?: number;
}

export interface TypographyStyle {
  color?: any;
  fontFamily: any;
  fontSize: any;
  fontWeight: FontWeight;
  letterSpacing?: any;
  lineHeight?: LineHeight;
  textTransform?: any;
}

export interface TypographyUtils {
  pxToRem: (px: number) => string;
}

export type Typography = Record<Style, TypographyStyle> & FontStyle & TypographyUtils;

export type TypographyOptions = Partial<Record<Style, Partial<TypographyStyle>> & FontStyle>;

/* //export type TypographyOptions = DeepPartial<Typography>;

export default function createTypography(
  palette: Palette,
  typography: TypographyOptions | ((palette: Palette) => TypographyOptions),
): Typography; */
