import { MDCLinearProgress } from '@material/linear-progress';
export class MWCProgress {
    constructor() {
        this.show = true;
        this.type = 'indeterminate';
        this.reversed = false;
    }
    progress(value) {
        this.mdcProgress.progress = value;
    }
    buffer(value) {
        this.mdcProgress.buffer = value;
    }
    componentWillLoad() {
        if (this.progressbarcolor) {
            this.progressEl.style.setProperty('--mdc-theme-primary', this.progressbarcolor);
        }
    }
    componentDidLoad() {
        let progressStyle = '';
        let bufferStyle = '';
        if (this.progressbarcolor) {
            progressStyle = `background-color: ${this.progressbarcolor};`;
        }
        if (this.bufferbarcolor) {
            bufferStyle = `background-color: ${this.bufferbarcolor};`;
        }
        if (progressStyle.length > 0) {
            this.innerProgressBar.setAttribute('style', progressStyle);
        }
        if (bufferStyle.length > 0) {
            this.bufferProgressBar.setAttribute('style', bufferStyle);
        }
        this.mdcProgress = MDCLinearProgress.attachTo(this.progressBar);
        this.mdcProgress.progress = 0;
        this.mdcProgress.buffer = 0;
    }
    componentDidUnload() {
        this.mdcProgress.destroy();
    }
    getProgressClassName() {
        let className = "mdc-linear-progress";
        if (this.type === "indeterminate") {
            className = `${className} mdc-linear-progress--indeterminate`;
        }
        if (this.reversed) {
            className = ` ${className} mdc-linear-progress--reversed`;
        }
        if (!this.show) {
            className = ` ${className} mdc-linear-progress--closed`;
        }
        return className;
    }
    render() {
        return (h("div", { role: "progressbar", ref: (progressBar) => { this.progressBar = progressBar; }, class: this.getProgressClassName() },
            h("div", { class: "mdc-linear-progress__buffering-dots" }),
            h("div", { class: "mdc-linear-progress__buffer", ref: (bufferProgressBar) => { this.bufferProgressBar = bufferProgressBar; } }),
            h("div", { class: "mdc-linear-progress__bar mdc-linear-progress__primary-bar" },
                h("span", { class: "mdc-linear-progress__bar-inner", ref: (innerProgressBar) => { this.innerProgressBar = innerProgressBar; } })),
            h("div", { class: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar" },
                h("span", { class: "mdc-linear-progress__bar-inner" }))));
    }
}
