export class MWCDialogBody {
    render() {
        return (h("section", { class: "mdc-dialog__body" },
            h("slot", null)));
    }
}
