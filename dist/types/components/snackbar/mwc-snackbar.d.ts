import { EventEmitter } from '@stencil/core';
export declare class MWCSnackbar {
    snackBarEl: HTMLElement;
    message: string;
    timeout: number;
    actiontext: string;
    multiline: boolean;
    actiononbutton: boolean;
    dismissesonaction: boolean;
    backgroundcolor: string;
    actioncolor: string;
    messagecolor: string;
    actionhandler: EventEmitter;
    show(): void;
    selected: EventEmitter;
    mdcSnackComponent: any;
    mdcSnackBar: any;
    elStyleNode: any;
    getStyleNode(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    render(): JSX.Element;
}
