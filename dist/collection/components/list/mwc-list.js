import ListStyle from './mwc-list-style';
export class MWCList {
    constructor() {
        this.borderlist = true;
        this.dense = false;
    }
    componentWillLoad() {
        this.listStyle = new ListStyle();
        let changeStyle = {};
        this.listStyle.setup(changeStyle);
    }
    getClassNames() {
        let classNames = ['root'];
        return classNames;
    }
    render() {
        return (h("ul", { class: this.listStyle.getClassName(this.getClassNames()) },
            h("slot", null)));
    }
}
