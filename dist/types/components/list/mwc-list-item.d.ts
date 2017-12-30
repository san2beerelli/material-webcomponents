export declare class MWCListItem {
    listItemEl: HTMLElement;
    ripple: boolean;
    interactive: boolean;
    listItemRipple: any;
    listItem: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    getListItemClassName(): string;
    render(): JSX.Element;
}
