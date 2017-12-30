import { EventEmitter } from '@stencil/core';
import { MDCTabBar, MDCTabBarScroller } from '@material/tabs';
export class MWCTabbar {
    constructor() {
        this.activeindex = 0;
        this.scroller = false;
        this.tabs = [
            { label: 'Recents', icon: 'phone' },
            { label: 'Favorites', icon: 'favorite' },
            { label: 'Nearby', icon: 'person_pin' }
        ];
        this.iconTabBar = false;
        this.textTabBar = false;
    }
    componentWillLoad() {
        if (this.tabs[0].icon) {
            this.iconTabBar = true;
        }
        if (this.tabs[0].label) {
            this.textTabBar = true;
        }
    }
    componentDidLoad() {
        if (this.scroller) {
            this.mdcTabBarComponent = MDCTabBarScroller.attachTo(this.mdcTabBarScroller);
        }
        else {
            this.mdcTabBarComponent = MDCTabBar.attachTo(this.mdcTabBar);
        }
        this.mdcTabBarComponent.listen('MDCTabBar:change', ({ detail: tabs }) => {
            this.change.emit(tabs);
        });
    }
    getTabBarClassName() {
        let className = 'mdc-tab-bar';
        if (this.iconTabBar) {
            className = `${className} mdc-tab-bar--icons-with-text`;
        }
        if (this.scroller) {
            className = `${className} mdc-tab-bar-scroller__scroll-frame__tabs`;
        }
        return className;
    }
    getTabClassName(index) {
        let className = 'mdc-tab';
        if (this.iconTabBar && this.textTabBar) {
            className = `${className} mdc-tab--with-icon-and-text`;
        }
        else if (this.iconTabBar) {
            className = `${className} mdc-tab-bar--icon-tab-bar`;
        }
        if (index === this.activeindex) {
            className = `${className} mdc-tab--active`;
        }
        return className;
    }
    renderText(tab) {
        if (this.iconTabBar) {
            return (h("span", { class: "mdc-tab__icon-text" }, tab.label));
        }
        return tab.label;
    }
    renderIcon(tab) {
        if (this.iconTabBar) {
            return (h("i", { class: "material-icons mdc-tab__icon", "aria-hidden": "true" }, tab.icon));
        }
        return null;
    }
    renderNavigation() {
        return (h("nav", { class: this.getTabBarClassName(), ref: (mdcTabBar) => { this.mdcTabBar = mdcTabBar; } },
            this.tabs.map((tab, index) => {
                return (h("a", { class: this.getTabClassName(index) },
                    this.renderIcon(tab),
                    this.renderText(tab)));
            }),
            h("span", { class: "mdc-tab-bar__indicator" })));
    }
    renderScrollerNavigation() {
        if (this.scroller) {
            return (h("div", { class: "mdc-tab-bar-scroller", ref: (mdcTabBarScroller) => { this.mdcTabBarScroller = mdcTabBarScroller; } },
                h("div", { class: "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back" },
                    h("a", { class: "mdc-tab-bar-scroller__indicator__inner material-icons", href: "#", "aria-label": "scroll back button" }, "navigate_before")),
                h("div", { class: "mdc-tab-bar-scroller__scroll-frame" }, this.renderNavigation()),
                h("div", { class: "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward" },
                    h("a", { class: "mdc-tab-bar-scroller__indicator__inner material-icons", href: "#", "aria-label": "scroll forward button" }, "navigate_next"))));
        }
        return this.renderNavigation();
    }
    render() {
        return this.renderScrollerNavigation();
    }
}
