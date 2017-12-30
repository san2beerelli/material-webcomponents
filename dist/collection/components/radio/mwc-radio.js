import { MDCRadio } from '@material/radio';
export class MWCRadio {
    constructor() {
        this.borderlist = true;
        this.checked = false;
        this.dense = false;
        this.ripple = true;
    }
    componentWillLoad() {
        if (this.radiocolor) {
            this.radioEl.style.setProperty('--mdc-theme-secondary', this.radiocolor);
        }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.radioRipple = MDCRadio.attachTo(this.mdcRadio);
            //  this.radioRipple.unbounded = true
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.radioRipple.destroy();
        }
    }
    getListClassName() {
        let className = 'mdc-list';
        if (this.borderlist) {
            className = ` ${className} webmd-bordered-list`;
        }
        if (this.dense) {
            className = ` ${className} mdc-list--dense`;
        }
        return className;
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(`.mdc-radio::before, .mdc-radio::after{
                    background-color: ${this.radiocolor}20 !important;
                }`);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.radioEl.appendChild(this.elStyleNode);
    }
    onFocus() {
        if (this.radiocolor) {
            this.getStyleNode();
        }
    }
    onBlur() {
        if (this.radiocolor) {
            this.radioEl.removeChild(this.elStyleNode);
        }
    }
    render() {
        return (h("div", { class: "mdc-radio", ref: (mdcRadio) => { this.mdcRadio = mdcRadio; } },
            h("input", { class: "mdc-radio__native-control", type: "radio", checked: this.checked, name: this.name, onFocus: (evt) => this.onFocus(), onBlur: (evt) => this.onBlur() }),
            h("div", { class: "mdc-radio__background" },
                h("div", { class: "mdc-radio__outer-circle" }),
                h("div", { class: "mdc-radio__inner-circle" }))));
    }
}
