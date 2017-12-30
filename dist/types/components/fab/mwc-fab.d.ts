export declare class MWCFab {
    icon: string;
    mini: boolean;
    backgroundcolor: string;
    color: string;
    ripple: boolean;
    buttonRipple: any;
    fab: any;
    fabEl: HTMLElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    getFabClassName(): string;
    render(): JSX.Element;
}
