import { EventEmitter } from '@stencil/core';
import { MDCTab } from '@material/tabs';
export class MWCToolbar {
    constructor() {
        this.checked = false;
        this.switchcolor = '';
        this.labelposition = 'right';
        this.active = false;
        this.icon = '';
        this.label = '';
    }
    componentWillLoad() {
        if (this.switchcolor) {
            //  this.switchEl.style.setProperty('--mdc-theme-secondary',this.switchcolor);
        }
    }
    componentDidLoad() {
        //this.mdcTabComponent = MDCTab.attachTo(this.mdcTab)
    }
    getTabClassName() {
        let className = 'mdc-tab mdc-tab--with-icon-and-text';
        if (this.active) {
            className = `${className} mdc-tab--active`;
        }
        return className;
    }
    render() {
        return (h("div", { class: "mdc-toolbar" },
            h("div", { class: "mdc-toolbar__row" },
                h("span", { class: "mdc-toolbar__title" }, "This is a super super super super long title"),
                h("section", { class: "mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit" },
                    h("a", { class: "material-icons search align-icons", "aria-label": "Search" }, "search")))));
    }
}
