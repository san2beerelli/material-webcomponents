export declare class MWCTheme {
    themeEl: HTMLElement;
    theme: object;
    fonts: Array<string>;
    icons: Array<string>;
    fontsAndIcons: Array<string>;
    getLinkNode(fontUrl: any): void;
    componentWillLoad(): void;
    render(): JSX.Element;
}
