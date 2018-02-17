import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.
import indigo from './types/colors/indigo';
import pink from './types/colors/pink';
import grey from './types/colors/grey';
import red from './types/colors/red';
import common from './types/colors/common';
import { getContrastRatio, darken, lighten } from './color-manipulator';
import { PaletteOptions } from './types/palette'

export const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)',
    lightDivider: 'rgba(0, 0, 0, 0.075)',
  },
  input: {
    bottomLine: 'rgba(0, 0, 0, 0.42)',
    helperText: 'rgba(0, 0, 0, 0.54)',
    labelText: 'rgba(0, 0, 0, 0.54)',
    inputText: 'rgba(0, 0, 0, 0.87)',
    disabled: 'rgba(0, 0, 0, 0.42)',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
  },
  background: {
    paper: common.white,
    default: grey[50],
    appBar: grey[100],
    contentFrame: grey[200],
    chip: grey[300],
    avatar: grey[400],
  },
  line: {
    stepper: grey[400],
  },
};

export const dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.12)',
    lightDivider: 'rgba(255, 255, 255, 0.075)',
  },
  input: {
    bottomLine: 'rgba(255, 255, 255, 0.7)',
    helperText: 'rgba(255, 255, 255, 0.7)',
    labelText: 'rgba(255, 255, 255, 0.7)',
    inputText: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  action: {
    active: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.3)',
  },
  background: {
    paper: grey[800],
    default: '#303030',
    appBar: grey[900],
    contentFrame: grey[900],
    chip: grey[700],
    avatar: grey[600],
  },
  line: {
    stepper: grey[600],
  },
};

export default function createPalette(palette: PaletteOptions) {
   const {
    primary = indigo,
    secondary = pink,
    error = red,
    type = 'light',
    // Same value used by material-components-web
    // https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L49
    ...other
  } = palette;
  const contrastThreshold = 3.1;
   const shades = { dark, light };

  function getContrastText(background) {
    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    return contrastText;
  }

   const paletteOutput = deepmerge(
    {
      common,
      type,
      primary,
      secondary,
      error,
      grey,
      shades,
      text: shades[type].text,
      input: shades[type].input,
      action: shades[type].action,
      background: shades[type].background,
      line: shades[type].line,
      contrastThreshold,
      getContrastText,
    },
    other,
    {
      clone: false, // No need to clone deep
    },
  );

  return paletteOutput;
}