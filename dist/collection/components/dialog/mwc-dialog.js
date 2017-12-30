import { EventEmitter } from '@stencil/core';
import { MDCDialog } from '@material/dialog';
export class MWCDialog {
    show() {
        this.mdcDialog.show();
    }
    close() {
        this.mdcDialog.close();
    }
    componentDidLoad() {
        this.mdcDialog = MDCDialog.attachTo(this.dialogDiv);
        this.mdcDialog.listen('MDCDialog:accept', () => {
            this.accepted.emit();
        });
        this.mdcDialog.listen('MDCDialog:cancel', () => {
            this.canceled.emit();
        });
        let cardStyles = '';
        if (this.width) {
            cardStyles = `max-width:${this.width} !important; width:${this.width} !important; min-width:${this.width} !important;`;
        }
        if (this.height) {
            cardStyles = `${cardStyles}height:${this.height}; `;
        }
        if (cardStyles.length > 0) {
            this.dialogEl.getElementsByTagName("div")[0].setAttribute('style', cardStyles);
        }
    }
    componentDidUnload() {
        this.mdcDialog.destroy();
    }
    render() {
        return (h("aside", { ref: (dialogDiv) => { this.dialogDiv = dialogDiv; }, class: "mdc-dialog", role: "alertdialog", "aria-labelledby": "my-mdc-dialog-label", "aria-describedby": "my-mdc-dialog-description" },
            h("div", { class: "mdc-dialog__surface" },
                h("slot", null)),
            h("div", { class: "mdc-dialog__backdrop" })));
    }
}
