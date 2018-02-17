import { Breakpoints } from './breakpoints';
import { Mixins, MixinsOptions } from './mixins';
import { Spacing } from './spacing';
export default function createMixins(breakpoints, spacing, mixins) {
    return Object.assign({ gutters: (styles) => {
            return Object.assign({ paddingLeft: spacing.unit * 2, paddingRight: spacing.unit * 2 }, styles, { [breakpoints.up('sm')]: Object.assign({ paddingLeft: spacing.unit * 3, paddingRight: spacing.unit * 3 }, styles[breakpoints.up('sm')]) });
        }, toolbar: {
            minHeight: 56,
            [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
                minHeight: 48,
            },
            [breakpoints.up('sm')]: {
                minHeight: 64,
            },
        } }, mixins);
}
