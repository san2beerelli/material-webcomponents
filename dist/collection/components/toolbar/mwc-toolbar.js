import { EventEmitter } from '@stencil/core';
import { MDCToolbar } from '@material/toolbar';
export class MWCToolbar {
    componentWillLoad() {
        this.toolbarEl.className = this.getToolBarClassName();
    }
    componentDidLoad() {
        this.toolbarComponent = MDCToolbar.attachTo(this.toolbarEl);
    }
    getToolBarClassName() {
        let className = 'mdc-toolbar';
        if (this.type !== undefined) {
            className = `${className} mdc-toolbar--fixed`;
        }
        return className;
    }
    render() {
        return (h("div", { class: "mdc-toolbar__row" },
            h("slot", null)));
    }
}
