import { EventEmitter } from '@stencil/core';
export declare class MWCToolbar {
    toolbarEl: HTMLElement;
    checked: boolean;
    switchcolor: string;
    labelposition: string;
    active: boolean;
    icon: string;
    label: string;
    selected: EventEmitter;
    mdcTabComponent: any;
    mdcTab: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    getTabClassName(): string;
    render(): JSX.Element;
}
