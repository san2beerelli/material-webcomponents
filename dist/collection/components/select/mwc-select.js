import { MDCSelect } from '@material/select';
export class MWCSelect {
    constructor() {
        this.borderlist = true;
        this.checked = false;
        this.dense = false;
        this.ripple = true;
    }
    componentWillLoad() {
        if (this.radiocolor) {
            // this.radioEl.style.setProperty('--mdc-theme-secondary',this.radiocolor);
        }
    }
    componentDidLoad() {
        this.mdcSelectComponent = MDCSelect.attachTo(this.mdcSelect);
        if (this.ripple) {
            // this.radioRipple =  MDCRadio.attachTo(this.mdcRadio);
            //  this.radioRipple.unbounded = true
        }
    }
    componentDidUnload() {
        this.mdcSelectComponent.destroy();
        if (this.ripple) {
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
        //  this.radioEl.appendChild(this.elStyleNode);
    }
    onFocus() {
        if (this.radiocolor) {
            this.getStyleNode();
        }
    }
    onBlur() {
        if (this.radiocolor) {
            // this.radioEl.removeChild(this.elStyleNode)
            {
            }
        }
    }
    render() {
        return (h("div", { class: "mdc-select", role: "listbox", ref: (mdcSelect) => { this.mdcSelect = mdcSelect; } },
            h("div", { class: "mdc-select__surface mdc-ripple-upgraded", tabindex: "0" },
                h("div", { class: "mdc-seect__label" }, "Pick a Food Group"),
                h("div", { class: "mdc-select__selected-text" }),
                h("div", { class: "mdc-select__bottom-line" })),
            h("div", { class: "mdc-simple-menu mdc-select__menu" },
                h("ul", { class: "mdc-list mdc-simple-menu__items" },
                    h("slot", null)))));
    }
}
