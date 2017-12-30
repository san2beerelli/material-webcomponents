import { EventEmitter } from '@stencil/core';
export declare class MWCTabbar {
    tabBarEl: HTMLElement;
    activeindex: number;
    scroller: boolean;
    tabs: Array<any>;
    change: EventEmitter;
    mdcTabBarComponent: any;
    mdcTabBar: any;
    mdcTabBarScroller: any;
    iconTabBar: boolean;
    textTabBar: boolean;
    componentWillLoad(): void;
    componentDidLoad(): void;
    getTabBarClassName(): string;
    getTabClassName(index: any): string;
    renderText(tab: any): any;
    renderIcon(tab: any): JSX.Element;
    renderNavigation(): JSX.Element;
    renderScrollerNavigation(): JSX.Element;
    render(): JSX.Element;
}
