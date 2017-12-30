export class MWCCardActions {
    render() {
        return (h("section", { class: "mdc-card__actions" },
            h("slot", null)));
    }
}
