import { EventEmitter } from '@stencil/core';
import { MDCSnackbar } from '@material/snackbar';
export class MWCSnackbar {
    constructor() {
        this.message = '';
        this.timeout = 1000;
        this.actiontext = '';
        this.multiline = false;
        this.actiononbutton = false;
        this.dismissesonaction = true;
        this.backgroundcolor = "#000000";
        this.actioncolor = "#ff0ff0";
        this.messagecolor = "#ffffff";
    }
    show() {
        const dataObj = {
            message: this.message,
            actionText: this.actiontext,
            multiline: this.multiline,
            timeout: this.timeout,
            actionOnBottom: this.multiline && this.actiononbutton,
            actionHandler: () => {
                this.actionhandler.emit();
            }
        };
        this.mdcSnackComponent.show(dataObj);
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        let bgClass;
        if (this.backgroundcolor) {
            bgClass = `.webmd-snackbar{
                    background-color: ${this.backgroundcolor} !important;
                }`;
        }
        if (this.messagecolor) {
            bgClass = `${bgClass} .mdc-snackbar__text{
                 color: ${this.messagecolor} !important
            }`;
        }
        var styleText = document.createTextNode(bgClass);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.snackBarEl.appendChild(this.elStyleNode);
    }
    componentWillLoad() {
        if (this.actioncolor) {
            this.snackBarEl.style.setProperty('--mdc-theme-secondary', this.actioncolor);
        }
    }
    componentDidLoad() {
        this.mdcSnackComponent = MDCSnackbar.attachTo(this.mdcSnackBar);
        this.mdcSnackComponent.dismissesOnAction = this.dismissesonaction;
        if (this.backgroundcolor || this.messagecolor) {
            this.getStyleNode();
        }
    }
    componentDidUnload() {
        if (this.backgroundcolor || this.messagecolor) {
            this.snackBarEl.removeChild(this.elStyleNode);
        }
    }
    render() {
        return (h("div", { class: "mdc-snackbar webmd-snackbar", "aria-live": "assertive", "aria-atomic": "true", "aria-hidden": "true", ref: (mdcSnackBar) => { this.mdcSnackBar = mdcSnackBar; } },
            h("div", { class: "mdc-snackbar__text" }),
            h("div", { class: "mdc-snackbar__action-wrapper" },
                h("button", { type: "button", class: "mdc-snackbar__action-button" }))));
    }
}
