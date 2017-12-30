import { EventEmitter } from '@stencil/core';
import { MDCSlider } from '@material/slider';
export class MWCSlider {
    constructor() {
        this.value = 50;
        this.min = 0;
        this.max = 100;
        this.step = 0;
        this.disabled = false;
        this.discrete = false;
        this.slidercolor = "#000000";
    }
    stepup(amount = 1) {
        this.mdcSlider.stepUp(amount);
    }
    stepdown(amount = 1) {
        this.mdcSlider.stepDown(amount);
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(`.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{
                    background-color: ${this.slidercolor}20 !important;
                }`);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.sliderEl.appendChild(this.elStyleNode);
    }
    componentWillLoad() {
        if (this.slidercolor) {
            this.sliderEl.style.setProperty('--mdc-theme-secondary', this.slidercolor);
        }
    }
    componentDidLoad() {
        this.mdcSlider = MDCSlider.attachTo(this.mdcSlider);
        this.mdcSlider.listen('MDCSlider:change', () => {
            this.change.emit(this.mdcSlider.value);
        });
        this.mdcSlider.listen('MDCSlider:input', () => {
            this.inputchange.emit(this.mdcSlider.value);
        });
        this.getStyleNode();
    }
    componentDidUnload() {
        this.mdcSlider.destroy();
        this.sliderEl.removeChild(this.elStyleNode);
    }
    // Todo Discrete  // mdc-slider--display-markers
    getGridListClassName() {
        let className = 'mdc-grid-list';
        if (this.discrete) {
            className = ` ${className} mdc-grid-list--tile-aspect-${this.discrete}`;
        }
        return className;
    }
    render() {
        return (h("div", { class: "mdc-slider mdc-slider--discrete", tabindex: "0", role: "slider", ref: (mdcSlider) => { this.mdcSlider = mdcSlider; }, "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.value, "data-step": this.step, "aria-label": "Select Value" },
            h("div", { class: "mdc-slider__track-container" },
                h("div", { class: "mdc-slider__track" })),
            h("div", { class: "mdc-slider__thumb-container" },
                h("div", { class: "mdc-slider__pin" },
                    h("span", { class: "mdc-slider__pin-value-marker" })),
                h("svg", { class: "mdc-slider__thumb", width: "21", height: "21" },
                    h("circle", { cx: "10.5", cy: "10.5", r: "7.875" })),
                h("div", { class: "mdc-slider__focus-ring" }))));
    }
}
