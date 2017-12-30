import { MDCRipple } from '@material/ripple';
export class MWCButton {
    constructor() {
        this.raised = false;
        this.unelevated = false;
        this.stroked = false;
        this.dense = false;
        this.compact = false;
        this.disabled = false;
        this.ripple = true;
    }
    getButtonClassName() {
        let className = "mdc-button";
        if (this.raised) {
            className = `${className} mdc-button--raised`;
        }
        if (this.unelevated) {
            className = `${className} mdc-button--unelevated`;
        }
        if (this.stroked) {
            className = `${className} mdc-button--stroked`;
        }
        if (this.dense) {
            className = `${className} mdc-button--dense`;
        }
        if (this.compact) {
            className = `${className} mdc-button--compact`;
        }
        return className;
    }
    componentWillLoad() {
        if (this.color && this.raised) {
            this.btnEl.style.setProperty('--mdc-theme-text-primary-on-primary', this.color);
        }
        else if (this.color) {
            this.btnEl.style.setProperty('--mdc-theme-primary', this.color);
        }
        if (this.backgroundcolor) {
            this.btnEl.style.setProperty('--mdc-theme-primary', this.backgroundcolor);
        }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.buttonRipple = MDCRipple.attachTo(this.mwcButton);
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.buttonRipple.destroy();
        }
    }
    renderIcon() {
        if (this.icon) {
            return (h("i", { class: "material-icons webmd-icon" }, this.icon));
        }
        return null;
    }
    renderButton() {
        if (this.href) {
            return (h("a", { href: this.href, class: this.getButtonClassName() },
                h("slot", null)));
        }
        return (h("button", { disabled: this.disabled, ref: (mwcButton) => { this.mwcButton = mwcButton; }, class: this.getButtonClassName() },
            this.renderIcon(),
            h("slot", null)));
    }
    render() {
        return this.renderButton();
    }
}
