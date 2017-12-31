export class MWCList {
    constructor() {
        this.borderlist = true;
        this.dense = false;
    }
    getListClassName() {
        let className = 'mdc-list';
        if (this.borderlist) {
            className = ` ${className} mwc-bordered-list`;
        }
        if (this.dense) {
            className = ` ${className} mdc-list--dense`;
        }
        return className;
    }
    render() {
        return (h("ul", { class: this.getListClassName() },
            h("slot", null)));
    }
}
