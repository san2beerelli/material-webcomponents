import { EventEmitter } from '@stencil/core';
import { MDCSimpleMenu } from '@material/menu';
export class MWCMenu {
    constructor() {
        this.open = false;
    }
    show(focusIndex) {
        if (focusIndex) {
            this.mdcMenuComponent.show({ focusIndex });
        }
        else {
            this.mdcMenuComponent.show();
        }
    }
    hide() {
        this.mdcMenuComponent.hide();
    }
    componentDidLoad() {
        this.mdcMenuComponent = MDCSimpleMenu.attachTo(this.mdcMenu);
        if (this.open) {
            this.mdcMenuComponent.open = true;
        }
        this.mdcMenu.addEventListener('MDCSimpleMenu:selected', (evt) => {
            this.selected.emit(evt);
        });
    }
    componentDidUnload() {
        this.mdcMenuComponent.destroy();
    }
    render() {
        return (h("div", { class: "mdc-simple-menu", tabindex: "-1", ref: (mdcMenu) => { this.mdcMenu = mdcMenu; } },
            h("ul", { class: "mdc-simple-menu__items mdc-list", role: "menu", "aria-hidden": "true" },
                h("slot", null))));
    }
}
