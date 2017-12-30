import { EventEmitter } from '@stencil/core';
export declare class MWCDrawer {
    drawerEl: HTMLElement;
    ondraweropen: EventEmitter;
    ondrawerclose: EventEmitter;
    type: String;
    toolbarspacer: boolean;
    header: boolean;
    mdcDrawer: any;
    drawerDIV: any;
    open(): void;
    close(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    renderToolbarSpacer(): JSX.Element;
    renderHeader(): JSX.Element;
    renderPermanentDrawer(): JSX.Element;
    renderOtherDrawers(): JSX.Element;
    render(): JSX.Element;
}
