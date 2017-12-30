import { EventEmitter } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
export class MWCTextfield {
    constructor() {
        // TODO - styling
        this.type = 'text'; //password
        this.required = false;
        this.minlength = 0;
        this.label = 'Password';
        this.value = '';
        this.labelposition = 'right';
        this.helpertext = '';
        this.disabled = false;
        this.showbox = false;
        this.fullwidth = false;
        this.textarea = false;
        this.outlined = true;
        this.dense = false;
        this.focused = true;
        this.icon = '';
        this.iconposition = 'leading'; //trailing
    }
    componentWillLoad() {
        //  if(this.switchcolor){
        // this.switchEl.style.setProperty('--mdc-theme-secondary',this.switchcolor);
        // }
    }
    componentDidLoad() {
        this.mdcTextfieldComponent = MDCTextField.attachTo(this.mdcTextfield);
    }
    renderLabel() {
        if (this.label) {
            return h("label", { htmlFor: "basic-switch", class: "mdc-switch-label" }, this.label);
        }
        return null;
    }
    getDivClassName() {
        let className = '';
        if (this.labelposition == "left") {
            className = "mdc-switch-reverse";
        }
        else {
            className = "mdc-switch";
        }
        return className;
    }
    getTextfieldClassName() {
        let className = 'mdc-text-field mdc-text-field--upgraded';
        if (this.showbox) {
            className = `${className} mdc-text-field--box`;
        }
        if (this.fullwidth) {
            className = `${className} mdc-text-field--fullwidth`;
        }
        if (this.textarea) {
            className = `${className} mdc-text-field--textarea`;
        }
        if (this.disabled) {
            className = `${className}  mdc-text-field--disabled`;
        }
        if (this.outlined) {
            className = `${className}  mdc-text-field--outlined`;
        }
        if (this.dense) {
            className = `${className}  mdc-text-field--dense`;
        }
        if (this.focused) {
            className = `${className}  mdc-text-field--focused`;
        }
        if (this.icon && this.iconposition === "leading") {
            className = `${className} mdc-text-field--with-leading-icon`;
        }
        if (this.icon && this.iconposition === "trailing") {
            className = `${className} mdc-text-field--with-trailing-icon`;
        }
        return className;
    }
    renderInputOrTextarea() {
        if (this.textarea) {
            return (h("textarea", { class: "mdc-text-field__input" }));
        }
        return (h("input", { type: this.type, class: "mdc-text-field__input", required: this.required, minlength: this.minlength, value: this.value, disabled: this.disabled }));
    }
    renderOutlined() {
        if (this.outlined) {
            return (h("div", null,
                h("div", { class: "mdc-text-field__outline" },
                    h("svg", null,
                        h("path", { class: "mdc-text-field__outline-path" }))),
                h("div", { class: "mdc-text-field__idle-outline" })));
        }
    }
    renderHelperText() {
        if (this.helpertext) {
            return (h("p", { id: "my-text-field-helper-text", class: "mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg", "aria-hidden": "true" }, this.helpertext));
        }
        return null;
    }
    renderIcon() {
        if (this.icon) {
            return (h("i", { class: "material-icons mdc-text-field__icon", tabindex: "0" }, this.icon));
        }
        return null;
    }
    render() {
        return (h("div", null,
            h("div", { class: this.getTextfieldClassName(), ref: (mdcTextfield) => { this.mdcTextfield = mdcTextfield; } },
                this.renderIcon(),
                this.renderInputOrTextarea(),
                h("label", { class: "mdc-text-field__label mdc-text-field__label--float-above", htmlfor: "pre-filled" }, this.label),
                h("div", { class: "mdc-text-field__bottom-line" })),
            this.renderHelperText()));
    }
}
