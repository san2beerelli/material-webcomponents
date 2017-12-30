import { EventEmitter } from '@stencil/core';
export declare class MWCMenu {
    menuEl: HTMLElement;
    open: boolean;
    show(focusIndex: number): void;
    hide(): void;
    selected: EventEmitter;
    mdcMenuComponent: any;
    mdcMenu: any;
    componentDidLoad(): void;
    componentDidUnload(): void;
    render(): JSX.Element;
}
