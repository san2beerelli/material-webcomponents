import { PaletteOptions } from './types/palette';
export declare const light: {
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        icon: string;
        divider: string;
        lightDivider: string;
    };
    input: {
        bottomLine: string;
        helperText: string;
        labelText: string;
        inputText: string;
        disabled: string;
    };
    action: {
        active: string;
        disabled: string;
    };
    background: {
        paper: string;
        default: string;
        appBar: string;
        contentFrame: string;
        chip: string;
        avatar: string;
    };
    line: {
        stepper: string;
    };
};
export declare const dark: {
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        icon: string;
        divider: string;
        lightDivider: string;
    };
    input: {
        bottomLine: string;
        helperText: string;
        labelText: string;
        inputText: string;
        disabled: string;
    };
    action: {
        active: string;
        disabled: string;
    };
    background: {
        paper: string;
        default: string;
        appBar: string;
        contentFrame: string;
        chip: string;
        avatar: string;
    };
    line: {
        stepper: string;
    };
};
export default function createPalette(palette: PaletteOptions): any;
