import { Palette } from './types/palette';
import { TypographyOptions, Typography } from './typography';
export default function createTypography(palette: Palette, typography: TypographyOptions | ((palette: Palette) => TypographyOptions)): Typography;
