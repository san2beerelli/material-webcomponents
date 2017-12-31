export declare class MWCToolbar {
    toolbarEl: HTMLDivElement;
    type: string;
    toolbarComponent: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    getToolBarClassName(): string;
    render(): JSX.Element;
}
