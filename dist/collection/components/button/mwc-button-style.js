import { getTheme } from '../util/mwc-util';
import setupJss from '../styles/setup-jss';
import deepmerge from 'deepmerge';
import createTheme from '../styles/create-theme';
import { fade } from '../styles/color-manipulator';
const formatMs = (milliseconds) => `${Math.round(milliseconds)}ms`;
export const rippleColors = {
    default: '',
    primary: '',
    secondary: '',
    white: ''
};
const theme = createTheme(getTheme());
class ButtonStyle {
    constructor() {
        this.defaultStyle = {
            root: Object.assign({}, theme.typography.button, { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative', lineHeight: '1.4em', boxSizing: 'border-box', minWidth: 88, minHeight: 36, padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`, borderRadius: 2, color: theme.palette.text.primary, WebkitTapHighlightColor: theme.palette.common.transparent, backgroundColor: 'transparent', outline: 'none', border: 0, cursor: 'pointer', userSelect: 'none', verticalAlign: 'middle', appearance: 'none', textDecoration: 'none', '&::-moz-focus-inner': {
                    borderStyle: 'none',
                }, transition: `background-color ${formatMs(theme.transitions.duration.short)}, box-shadow ${formatMs(theme.transitions.duration.short)}`, '&:hover': {
                    textDecoration: 'none',
                    // Reset on mouse devices
                    backgroundColor: fade(theme.palette.text.primary, 0.12),
                    '@media (hover: none)': {
                        backgroundColor: 'transparent',
                    },
                    '&$disabled': {
                        backgroundColor: 'transparent',
                    },
                }, '&:active': {
                    outline: 'none'
                } }),
            disabled: {
                pointerEvents: 'none',
                cursor: 'default',
                backgroundColor: 'transparent',
                color: theme.palette.action.disabled,
            },
            dense: {
                padding: `${theme.spacing.unit - 1}px ${theme.spacing.unit}px`,
                minWidth: 64,
                minHeight: 32,
                fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1),
            },
            label: {
                width: '100%',
                display: 'inherit',
                alignItems: 'inherit',
                justifyContent: 'inherit',
            },
            flatPrimary: {
                color: theme.palette.primary[500],
                '&:hover': {
                    backgroundColor: fade(theme.palette.primary[500], 0.12),
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: 'transparent',
                    },
                },
            },
            flatSecondary: {
                color: theme.palette.secondary['A200'],
                '&:hover': {
                    backgroundColor: fade(theme.palette.secondary['A200'], 0.12),
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: 'transparent',
                    },
                },
            },
            flatContrast: {
                color: theme.palette.getContrastText(theme.palette.primary[500]),
                '&:hover': {
                    backgroundColor: fade(theme.palette.getContrastText(theme.palette.primary[500]), 0.12),
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: 'transparent',
                    },
                },
            },
            colorInherit: {
                color: 'inherit',
            },
            stroked: {
                borderStyle: 'solid',
                borderColor: theme.palette.grey[300],
                borderWidth: '2px'
            },
            strokedPrimary: {
                borderStyle: 'solid',
                borderColor: theme.palette.primary[500],
                borderWidth: '2px'
            },
            strokedSecondary: {
                borderStyle: 'solid',
                borderColor: theme.palette.secondary['A200'],
                borderWidth: '2px'
            },
            strokedContrast: {
                borderStyle: 'solid',
                borderColor: fade(theme.palette.getContrastText(theme.palette.primary[500]), 0.12),
                borderWidth: '2px'
            },
            raised: {
                color: theme.palette.getContrastText(theme.palette.grey[300]),
                backgroundColor: theme.palette.grey[300],
                boxShadow: theme.shadows[2],
                '&$keyboardFocused': {
                    boxShadow: theme.shadows[6],
                },
                '&:active': {
                    boxShadow: theme.shadows[8],
                },
                '&$disabled': {
                    boxShadow: theme.shadows[0],
                    color: theme.palette.action.disabled,
                    backgroundColor: theme.palette.text.divider,
                },
                '&:hover': {
                    backgroundColor: theme.palette.grey.A100,
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: theme.palette.grey[300],
                    },
                    '&$disabled': {
                        backgroundColor: theme.palette.text.divider,
                        color: theme.palette.action.disabled,
                        // Reset on mouse devices
                        '@media (hover: none)': {
                            backgroundColor: theme.palette.grey[300],
                        },
                    },
                },
            },
            keyboardFocused: {},
            raisedPrimary: {
                color: theme.palette.getContrastText(theme.palette.primary[500]),
                backgroundColor: theme.palette.primary[500],
                '&:hover': {
                    backgroundColor: theme.palette.primary[700],
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: theme.palette.primary[500],
                    },
                },
            },
            raisedSecondary: {
                color: theme.palette.getContrastText(theme.palette.secondary['A200']),
                backgroundColor: theme.palette.secondary['A200'],
                '&:hover': {
                    backgroundColor: theme.palette.secondary['A400'],
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: theme.palette.secondary['A200'],
                    },
                },
            },
            raisedContrast: {
                color: theme.palette.getContrastText(theme.palette.primary[500]),
            },
            fab: {
                borderRadius: '50%',
                padding: 0,
                minWidth: 0,
                width: 56,
                height: 56,
                boxShadow: theme.shadows[6],
                '&:active': {
                    boxShadow: theme.shadows[12],
                },
            },
            mini: {
                width: 40,
                height: 40,
            },
        };
    }
    setup(style) {
        const mergedStyles = deepmerge.all([this.defaultStyle, style]);
        rippleColors.default = fade(theme.palette.text.primary, 0.30);
        rippleColors.primary = fade(theme.palette.primary[500], 0.30);
        rippleColors.secondary = fade(theme.palette.secondary['A200'], 0.30);
        rippleColors.white = fade('#ffffff', 0.50);
        this.jss = new setupJss();
        this.jss.attachStyleSheet(mergedStyles);
    }
    getClassName(type) {
        return this.jss.getClassName(type);
    }
}
export default ButtonStyle;
