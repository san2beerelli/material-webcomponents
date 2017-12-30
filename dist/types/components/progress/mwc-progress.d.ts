export declare class MWCProgress {
    progressEl: HTMLElement;
    width: string;
    height: string;
    show: boolean;
    type: string;
    reversed: boolean;
    progressbarcolor: string;
    bufferbarcolor: string;
    progress(value: any): void;
    buffer(value: any): void;
    progressBar: any;
    mdcProgress: any;
    innerProgressBar: any;
    bufferProgressBar: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    getProgressClassName(): string;
    render(): JSX.Element;
}
