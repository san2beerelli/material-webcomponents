declare const _default: {
    "direction": string;
    "palette": {
        "common": {
            "black": string;
            "white": string;
            "transparent": string;
            "fullBlack": string;
            "darkBlack": string;
            "lightBlack": string;
            "minBlack": string;
            "faintBlack": string;
            "fullWhite": string;
            "darkWhite": string;
            "lightWhite": string;
        };
        "type": string;
        "primary": {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            "A100": string;
            "A200": string;
            "A400": string;
            "A700": string;
            "contrastDefaultColor": string;
        };
        "secondary": {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            "A100": string;
            "A200": string;
            "A400": string;
            "A700": string;
            "contrastDefaultColor": string;
        };
        "error": {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            "A100": string;
            "A200": string;
            "A400": string;
            "A700": string;
            "contrastDefaultColor": string;
        };
        "grey": {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            "A100": string;
            "A200": string;
            "A400": string;
            "A700": string;
            "contrastDefaultColor": string;
        };
        "shades": {
            "dark": {
                "text": {
                    "primary": string;
                    "secondary": string;
                    "disabled": string;
                    "hint": string;
                    "icon": string;
                    "divider": string;
                    "lightDivider": string;
                };
                "input": {
                    "bottomLine": string;
                    "helperText": string;
                    "labelText": string;
                    "inputText": string;
                    "disabled": string;
                };
                "action": {
                    "active": string;
                    "disabled": string;
                };
                "background": {
                    "default": string;
                    "paper": string;
                    "appBar": string;
                    "contentFrame": string;
                    "chip": string;
                };
                "line": {
                    "stepper": string;
                };
            };
            "light": {
                "text": {
                    "primary": string;
                    "secondary": string;
                    "disabled": string;
                    "hint": string;
                    "icon": string;
                    "divider": string;
                    "lightDivider": string;
                };
                "input": {
                    "bottomLine": string;
                    "helperText": string;
                    "labelText": string;
                    "inputText": string;
                    "disabled": string;
                };
                "action": {
                    "active": string;
                    "disabled": string;
                };
                "background": {
                    "default": string;
                    "paper": string;
                    "appBar": string;
                    "contentFrame": string;
                    "chip": string;
                };
                "line": {
                    "stepper": string;
                };
            };
        };
        "text": {
            "primary": string;
            "secondary": string;
            "disabled": string;
            "hint": string;
            "icon": string;
            "divider": string;
            "lightDivider": string;
        };
        "input": {
            "bottomLine": string;
            "helperText": string;
            "labelText": string;
            "inputText": string;
            "disabled": string;
        };
        "action": {
            "active": string;
            "disabled": string;
        };
        "background": {
            "default": string;
            "paper": string;
            "appBar": string;
            "contentFrame": string;
            "chip": string;
        };
        "line": {
            "stepper": string;
        };
    };
    "typography": {
        "fontFamily": string;
        "fontSize": number;
        "fontWeightThin": number;
        "fontWeightLight": number;
        "fontWeightRegular": number;
        "fontWeightMedium": number;
        "fontWeightBold": number;
        "fontWeightBlack": number;
        "display4": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "letterSpacing": string;
            "lineHeight": string;
            "marginLeft": string;
            "color": string;
        };
        "display3": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "letterSpacing": string;
            "lineHeight": string;
            "marginLeft": string;
            "color": string;
        };
        "display2": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "lineHeight": string;
            "marginLeft": string;
            "color": string;
        };
        "display1": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "lineHeight": string;
            "marginLeft": string;
            "color": string;
        };
        "headline": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "lineHeight": string;
            "color": string;
        };
        "title": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "lineHeight": string;
            "color": string;
        };
        "subheading": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "lineHeight": string;
            "color": string;
        };
        "body2": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "lineHeight": string;
            "color": string;
        };
        "body1": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "lineHeight": string;
            "color": string;
        };
        "caption": {
            "fontSize": string;
            "fontWeight": number;
            "fontFamily": string;
            "lineHeight": string;
            "color": string;
        };
        "button": {
            "fontSize": string;
            "textTransform": string;
            "fontWeight": number;
            "fontFamily": string;
        };
    };
    "mixins": {
        "toolbar": {
            "minHeight": number;
            "@media (min-width:0px) and (orientation: landscape)": {
                "minHeight": number;
            };
            "@media (min-width:600px)": {
                "minHeight": number;
            };
        };
    };
    "breakpoints": {
        "keys": string[];
        "values": {
            "xs": number;
            "sm": number;
            "md": number;
            "lg": number;
            "xl": number;
        };
    };
    "shadows": string[];
    "transitions": {
        "easing": {
            "easeInOut": string;
            "easeOut": string;
            "easeIn": string;
            "sharp": string;
        };
        "duration": {
            "shortest": number;
            "shorter": number;
            "short": number;
            "standard": number;
            "complex": number;
            "enteringScreen": number;
            "leavingScreen": number;
        };
    };
    "spacing": {
        "unit": number;
    };
    "zIndex": {
        "mobileStepper": number;
        "appBar": number;
        "drawer": number;
        "modal": number;
        "snackbar": number;
        "tooltip": number;
    };
};
export default _default;
