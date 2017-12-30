export declare class MWCButton {
    icon: string;
    raised: boolean;
    unelevated: boolean;
    stroked: boolean;
    dense: boolean;
    compact: boolean;
    color: string;
    backgroundcolor: string;
    disabled: boolean;
    ripple: boolean;
    href: string;
    buttonRipple: any;
    mwcButton: any;
    btnEl: HTMLElement;
    getButtonClassName(): string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    renderIcon(): JSX.Element;
    renderButton(): JSX.Element;
    render(): JSX.Element;
}
