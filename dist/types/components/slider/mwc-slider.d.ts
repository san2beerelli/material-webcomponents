import { EventEmitter } from '@stencil/core';
export declare class MWCSlider {
    sliderEl: HTMLElement;
    value: number;
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    discrete: boolean;
    slidercolor: string;
    stepup(amount?: number): void;
    stepdown(amount?: number): void;
    change: EventEmitter;
    inputchange: EventEmitter;
    mdcSlider: any;
    elStyleNode: any;
    getStyleNode(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    getGridListClassName(): string;
    render(): JSX.Element;
}
