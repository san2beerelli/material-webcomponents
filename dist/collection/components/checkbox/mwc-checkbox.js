import { EventEmitter } from '@stencil/core';
import { MDCCheckbox } from '@material/checkbox';
export class MWCCheckbox {
    constructor() {
        this.ripple = true;
        this.disabled = false;
        this.checked = false;
        this.indeterminate = false;
        this.alignlabel = 'left';
    }
    componentWillLoad() {
        if (this.checkcolor) {
            this.checkBoxEl.style.setProperty('--mdc-theme-secondary', `#${this.checkcolor}`);
        }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.checkRipple = MDCCheckbox.attachTo(this.checkboxDiv);
        }
        if (this.indeterminate) {
            this.checkRipple.indeterminate = this.indeterminate;
        }
        if (this.formFieldDiv && this.alignlabel === 'right') {
            this.formFieldDiv.style.setProperty('flex-direction', 'row-reverse');
        }
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(`.mdc-checkbox::before, .mdc-checkbox::after{
                    background-color: #${this.checkcolor}20 !important;
                }`);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.checkBoxEl.appendChild(this.elStyleNode);
    }
    onFocus() {
        if (this.checkcolor) {
            this.getStyleNode();
        }
    }
    onBlur() {
        if (this.checkcolor) {
            this.checkBoxEl.removeChild(this.elStyleNode);
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.checkRipple.destroy();
        }
    }
    renderCheckbox() {
        return (h("div", { class: "mdc-checkbox", ref: (cbDiv) => { this.checkboxDiv = cbDiv; } },
            h("input", { type: "checkbox", id: "my-checkbox", ref: (input) => { this.inputComp = input; }, disabled: this.disabled, checked: this.checked, onFocus: (evt) => this.onFocus(), onBlur: (evt) => this.onBlur(), onChange: (evt) => this.change.emit(evt), class: "mdc-checkbox__native-control" }),
            h("div", { class: "mdc-checkbox__background" },
                h("svg", { class: "mdc-checkbox__checkmark", viewBox: "0 0 24 24" },
                    h("path", { class: "mdc-checkbox__checkmark__path", fill: "none", stroke: "white", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })),
                h("div", { class: "mdc-checkbox__mixedmark" }))));
    }
    renderCheckboxWithLabel() {
        return (h("div", { class: "mdc-form-field", ref: (formFieldDiv) => { this.formFieldDiv = formFieldDiv; } },
            h("label", null, this.label),
            this.renderCheckbox()));
    }
    render() {
        if (this.label) {
            return this.renderCheckboxWithLabel();
        }
        return this.renderCheckbox();
    }
}
