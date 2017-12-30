import { EventEmitter } from '@stencil/core';
export declare class MWCIconToggle {
    onicon: string;
    oniconlabel: string;
    officon: string;
    officonlabel: string;
    color: string;
    ripple: boolean;
    disabled: boolean;
    toggleon: boolean;
    oniconchange: EventEmitter;
    mdcIconToggle: any;
    iconToggle: any;
    elStyleNode: any;
    iconToggleEl: HTMLElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    getStyleNode(): void;
    onFocus(): void;
    onBlur(): void;
    getToggleOn(): string;
    getToggleOff(): string;
    getIconClassName(): string;
    render(): JSX.Element;
}
