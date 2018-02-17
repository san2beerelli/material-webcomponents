import CardContentStyle from './mwc-card-content-style';
export class MWCCardContent {
    componentWillLoad() {
        this.cardContentStyle = new CardContentStyle();
        let changeStyle = {};
        this.cardContentStyle.setup(changeStyle);
    }
    getClassNames() {
        let classNames = ['root'];
        return classNames;
    }
    render() {
        return (h("section", { class: this.cardContentStyle.getClassName(this.getClassNames()) },
            h("slot", null)));
    }
}
