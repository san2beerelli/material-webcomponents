var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import deepmerge from 'deepmerge';
import createTypography from './create-typography';
import createBreakpoints from './create-breakpoints';
import createPalette from './create-palette';
import createMixins from './create-mixins';
import shadows from './create-shadows';
import transitions from './create-transitions';
import zIndex from './create-zindex';
import spacing from './create-spacing';
import { ThemeOptions, Theme } from './theme';
function createTheme(options) {
    const { palette: paletteInput = {}, breakpoints: breakpointsInput = {}, mixins: mixinsInput = {}, typography: typographyInput = {}, shadows: shadowsInput } = options, other = __rest(options, ["palette", "breakpoints", "mixins", "typography", "shadows"]);
    console.log(options);
    // let shadows:Shadows = options['shadows']
    const palette = createPalette(paletteInput);
    const breakpoints = createBreakpoints(breakpointsInput);
    const muiTheme = Object.assign({ direction: 'ltr', palette, typography: createTypography(palette, typographyInput), mixins: createMixins(breakpoints, spacing, mixinsInput), breakpoints, shadows: shadowsInput || shadows }, deepmerge({
        transitions,
        spacing,
        zIndex,
    }, other));
    return muiTheme;
}
export default createTheme;
