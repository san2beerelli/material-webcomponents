import { EventEmitter } from '@stencil/core';
import { MDCPersistentDrawer, MDCTemporaryDrawer } from '@material/drawer';
export class MWCDrawer {
    constructor() {
        this.type = 'persistent'; //permanent,temporary
        this.toolbarspacer = true;
        this.header = true;
    }
    open() {
        if (this.type !== 'permanent') {
            this.mdcDrawer.open = true;
        }
    }
    close() {
        if (this.type !== 'permanent') {
            this.mdcDrawer.open = false;
        }
    }
    componentDidLoad() {
        if (this.type === 'persistent') {
            this.mdcDrawer = MDCPersistentDrawer.attachTo(this.drawerDIV);
            this.mdcDrawer.listen('MDCPersistentDrawer:open', () => {
                this.ondraweropen.emit();
            });
            this.mdcDrawer.listen('MDCPersistentDrawer:close', () => {
                this.ondrawerclose.emit();
            });
        }
        else if (this.type === 'temporary') {
            this.mdcDrawer = MDCTemporaryDrawer.attachTo(this.drawerDIV);
            this.mdcDrawer.listen('MDCTemporaryDrawer:open', () => {
                this.ondraweropen.emit();
            });
            this.mdcDrawer.listen('MDCTemporaryDrawer:close', () => {
                this.ondrawerclose.emit();
            });
        }
    }
    componentDidUnload() {
        if (this.type !== 'permanent') {
            this.mdcDrawer.destroy();
        }
    }
    renderToolbarSpacer() {
        if (this.toolbarspacer) {
            return (h("div", { class: `mdc-${this.type}-drawer__toolbar-spacer` },
                h("slot", { name: "toolbarspacer" })));
        }
        return null;
    }
    renderHeader() {
        if (this.header && this.type !== 'permanent') {
            return (h("header", { class: `mdc-${this.type}-drawer__header` },
                h("div", { class: `mdc-${this.type}-drawer__header-content` },
                    h("slot", { name: "header" }))));
        }
        return null;
    }
    renderPermanentDrawer() {
        return (h("nav", { class: "mdc-permanent-drawer drawer-body" },
            this.renderToolbarSpacer(),
            h("div", { class: "mdc-permanent-drawer__content" },
                h("slot", null))));
    }
    renderOtherDrawers() {
        return (h("aside", { ref: (drawerDIV) => { this.drawerDIV = drawerDIV; }, class: `mdc-${this.type}-drawer drawer-body` },
            h("nav", { class: `mdc-${this.type}-drawer__drawer` },
                this.renderToolbarSpacer(),
                this.renderHeader(),
                h("nav", { class: `mdc-${this.type}-drawer__content` },
                    h("slot", null)))));
    }
    render() {
        if (this.type === 'permanent') {
            return this.renderPermanentDrawer();
        }
        return this.renderOtherDrawers();
    }
}
