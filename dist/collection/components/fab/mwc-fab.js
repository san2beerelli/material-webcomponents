import { MDCRipple } from '@material/ripple';
export class MWCFab {
    constructor() {
        this.mini = false;
        this.ripple = true;
    }
    componentWillLoad() {
        if (this.color) {
            this.fabEl.style.setProperty('--mdc-theme-text-primary-on-secondary', this.color);
        }
        if (this.backgroundcolor) {
            this.fabEl.style.setProperty('--mdc-theme-secondary', this.backgroundcolor);
        }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.buttonRipple = MDCRipple.attachTo(this.fab);
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.buttonRipple.destroy();
        }
    }
    getFabClassName() {
        let className = 'mdc-fab material-icons';
        if (this.mini) {
            className = ` ${className} mdc-fab--mini`;
        }
        return className;
    }
    render() {
        return (h("button", { class: this.getFabClassName(), ref: (fab) => { this.fab = fab; } },
            h("span", { class: "mdc-fab__icon" }, this.icon)));
    }
}
