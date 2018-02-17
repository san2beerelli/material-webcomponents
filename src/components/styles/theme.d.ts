import { Palette, PaletteOptions } from './types/palette'
import { Typography, TypographyOptions } from './typography'
import { Mixins, MixinsOptions } from './mixins'
import { Breakpoints, BreakpointsOptions } from './breakpoints'
import { Shadows } from './shadows'
import { Transitions, TransitionsOptions } from './transition'
import { Spacing, SpacingOptions } from './spacing'
import { ZIndex, ZIndexOptions } from './zindex'

export type Direction = 'ltr' | 'rtl'

export interface ThemeOptions {
  direction?: Direction;
  palette?: PaletteOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  mixins?: MixinsOptions;
  breakpoints?: BreakpointsOptions;
  shadows?: Shadows;
  transitions?: TransitionsOptions;
  spacing?: SpacingOptions;
  zIndex?: ZIndexOptions;
}

export interface Theme {
  direction: Direction;
  palette: Palette;
  typography: Typography;
  mixins: Mixins;
  breakpoints: Breakpoints;
  shadows: Shadows;
  transitions: Transitions;
  spacing: Spacing;
  zIndex: ZIndex;
}