import PaperStyle from './mwc-paper-style';
export class MWCPaper {
    constructor() {
        this.width = 'auto';
        this.height = 'auto';
        this.elevation = 2;
        this.radius = 4;
    }
    componentWillLoad() {
        this.paperStyle = new PaperStyle();
        let changeStyle = {
            rounded: {
                borderRadius: this.radius,
                width: this.width,
                height: this.height,
            }
        };
        this.paperStyle.setup(changeStyle);
    }
    getClassNames() {
        let classNames = ['root', `shadow${this.elevation}`, 'rounded'];
        return classNames;
    }
    render() {
        return (h("div", { class: this.paperStyle.getClassName(this.getClassNames()) },
            h("slot", null)));
    }
}
