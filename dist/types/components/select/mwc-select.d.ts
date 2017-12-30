export declare class MWCSelect {
    selectEl: HTMLElement;
    borderlist: boolean;
    checked: boolean;
    dense: boolean;
    ripple: boolean;
    radiocolor: string;
    name: string;
    mdcSelectComponent: any;
    mdcSelect: any;
    elStyleNode: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    getListClassName(): string;
    getStyleNode(): void;
    onFocus(): void;
    onBlur(): void;
    render(): JSX.Element;
}
