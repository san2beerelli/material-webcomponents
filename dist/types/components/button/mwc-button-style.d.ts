export declare const rippleColors: {
    default: string;
    primary: string;
    secondary: string;
    white: string;
};
declare class ButtonStyle {
    defaultStyle: object;
    jss: any;
    setup(style: object): void;
    getClassName(type: Array<string>): string;
}
export default ButtonStyle;
