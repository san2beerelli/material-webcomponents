import { EventEmitter } from '@stencil/core';
export declare class MWCCheckbox {
    checkBoxEl: HTMLElement;
    ripple: boolean;
    disabled: boolean;
    checkcolor: string;
    name: string;
    value: string;
    checked: boolean;
    indeterminate: boolean;
    label: string;
    alignlabel: string;
    change: EventEmitter;
    inputComp: any;
    checkRipple: any;
    innerStyles: any;
    checkboxDiv: any;
    elStyleNode: any;
    formFieldDiv: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    getStyleNode(): void;
    onFocus(): void;
    onBlur(): void;
    componentDidUnload(): void;
    renderCheckbox(): JSX.Element;
    renderCheckboxWithLabel(): JSX.Element;
    render(): JSX.Element;
}
