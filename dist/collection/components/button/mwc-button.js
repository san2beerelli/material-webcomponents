import ButtonStyle, { rippleColors } from './mwc-button-style';
import tmripple from '../util/ripple';
import { colorType, buttonColor } from './mwc-button-types';
export class MWCButton {
    constructor() {
        this.raised = false;
        this.unelevated = false;
        this.stroked = false;
        this.dense = false;
        this.compact = false;
        this.color = "default";
        this.backgroundcolor = "#ff0000";
        this.disabled = false;
        this.ripple = true;
        this.fab = false;
        this.mini = false;
    }
    componentWillLoad() {
        const buttonStyle = new ButtonStyle();
        let changeStyle = {};
        buttonStyle.setup(changeStyle);
        this.btnEl.disabled = this.disabled;
        /*  Object.getOwnPropertyNames(this).forEach((key) => {
             console.log(typeof this[key])
         }) */
        this.btnEl.className = buttonStyle.getClassName(this.getClassNames());
    }
    getClassNames() {
        let classNames = ['root'];
        if (this.disabled) {
            classNames.push('disabled');
        }
        if (this.raised) {
            classNames.push('raised');
            if (this.color !== 'default') {
                classNames.push(`raised${buttonColor[this.color]}`);
            }
        }
        if (!this.raised && !this.stroked && !this.unelevated) {
            if (this.color !== 'default') {
                classNames.push(`flat${buttonColor[this.color]}`);
            }
        }
        if (this.dense) {
            classNames.push('dense');
        }
        if (this.fab) {
            classNames.push('fab');
        }
        if (this.mini) {
            classNames.push('mini');
        }
        return classNames;
    }
    componentDidLoad() {
        if (this.ripple) {
            const rippleColor = (this.raised && (this.color === 'primary' || this.color === 'secondary')) ? rippleColors.white : rippleColors[this.color];
            tmripple.attachToSelectors({
                selectors: this.btnEl,
                color: rippleColor,
                eventListener: 'mousedown'
            });
        }
    }
    renderIcon() {
        if (this.icon) {
            return (h("i", { class: "material-icons mwc-icon" }, this.icon));
        }
        return null;
    }
    renderButton() {
        if (this.href) {
            return (h("a", { href: this.href },
                h("slot", null)));
        }
        return (h("slot", null));
        /* return (
             <button disabled={this.disabled} ref={(mwcButton) => { this.mwcButton = mwcButton; }}>
              {this.renderIcon()}
              <slot />
            </button>
        ) */
    }
    render() {
        return (h("slot", null));
    }
}
