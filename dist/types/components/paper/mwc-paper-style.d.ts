declare class PaperStyle {
    defaultStyle: object;
    jss: any;
    setup(style: object): void;
    getClassName(type: Array<string>): string;
}
export default PaperStyle;
