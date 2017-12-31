import { EventEmitter } from '@stencil/core';
export class MWCToolbarSection {
    componentWillLoad() {
        this.toolbarSectionEl.className = this.getSectionClassName();
    }
    getSectionClassName() {
        let className = 'mdc-toolbar__section';
        if (this.align === "start") {
            className = `${className} mdc-toolbar__section--align-start`;
        }
        else if (this.align === "end") {
            className = `${className} mdc-toolbar__section--align-end`;
        }
        return className;
    }
    render() {
        return (h("slot", null));
    }
}
