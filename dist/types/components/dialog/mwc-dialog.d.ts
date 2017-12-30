import { EventEmitter } from '@stencil/core';
export declare class MWCDialog {
    dialogEl: HTMLElement;
    width: string;
    height: string;
    dialogDiv: any;
    mdcDialog: any;
    accepted: EventEmitter;
    canceled: EventEmitter;
    show(): void;
    close(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    render(): JSX.Element;
}
