import { EventEmitter } from '@stencil/core';
export class MWCSwitch {
    constructor() {
        this.checked = false;
        this.switchcolor = '';
        this.label = 'on/off';
        this.labelposition = 'right';
        this.disabled = false;
    }
    componentWillLoad() {
        if (this.switchcolor) {
            this.switchEl.style.setProperty('--mdc-theme-secondary', this.switchcolor);
        }
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
    getSwitchClassName() {
        let className = 'mdc-switch';
        if (this.disabled) {
            className = `${className} mdc-switch--disabled`;
        }
        return className;
    }
    render() {
        return (h("div", { class: this.getDivClassName() },
            h("div", { class: this.getSwitchClassName(), ref: (mdcSwitch) => { this.mdcSwitch = mdcSwitch; } },
                h("input", { type: "checkbox", checked: this.checked, disabled: this.disabled, class: "mdc-switch__native-control" }),
                h("div", { class: "mdc-switch__background" },
                    h("div", { class: "mdc-switch__knob" }))),
            this.renderLabel()));
    }
}
