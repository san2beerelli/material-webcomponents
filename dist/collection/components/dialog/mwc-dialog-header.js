export class MWCDialogHeader {
    render() {
        return (h("header", { class: "mdc-dialog__header" },
            h("h2", { class: "mdc-dialog__header__title" },
                h("slot", null))));
    }
}
