var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
import { BreakpointsOptions, Breakpoints, Breakpoint } from './breakpoints';
export const keys = ['xs', 'sm', 'md', 'lg', 'xl'];
export default function createBreakpoints(breakpoints) {
    const { 
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm[.
    values = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    }, unit = 'px', step = 5 } = breakpoints, other = __rest(breakpoints, ["values", "unit", "step"]);
    function up(key) {
        const value = typeof values[key] === 'number' ? values[key] : key;
        return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
        const endIndex = keys.indexOf(key) + 1;
        const upperbound = values[keys[endIndex]];
        if (endIndex === keys.length) {
            // xl down applies to all sizes
            return up('xs');
        }
        const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
        return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
        const endIndex = keys.indexOf(end) + 1;
        if (endIndex === keys.length) {
            return up(start);
        }
        return (`@media (min-width:${values[start]}${unit}) and ` +
            `(max-width:${values[keys[endIndex]] - step / 100}${unit})`);
    }
    function only(key) {
        return between(key, key);
    }
    function width(key) {
        return values[key];
    }
    let bp = Object.assign({ keys,
        values,
        up,
        down,
        between,
        only,
        width }, other);
    return bp;
}
