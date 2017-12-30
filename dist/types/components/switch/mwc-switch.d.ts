import { EventEmitter } from '@stencil/core';
export declare class MWCSwitch {
    switchEl: HTMLElement;
    checked: boolean;
    switchcolor: string;
    label: string;
    labelposition: string;
    disabled: boolean;
    selected: EventEmitter;
    mdcMenuComponent: any;
    mdcSwitch: any;
    componentWillLoad(): void;
    renderLabel(): JSX.Element;
    getDivClassName(): string;
    getSwitchClassName(): string;
    render(): JSX.Element;
}
