import { colorType } from './mwc-button-types';
export declare class MWCButton {
    icon: string;
    raised: boolean;
    unelevated: boolean;
    stroked: boolean;
    dense: boolean;
    compact: boolean;
    color: colorType;
    backgroundcolor: string;
    disabled: boolean;
    ripple: boolean;
    fab: boolean;
    mini: boolean;
    href: string;
    buttonRipple: any;
    mwcButton: any;
    btnEl: HTMLButtonElement;
    classes: any;
    componentWillLoad(): void;
    getClassNames(): Array<string>;
    componentDidLoad(): void;
    renderIcon(): JSX.Element;
    renderButton(): JSX.Element;
    render(): JSX.Element;
}
