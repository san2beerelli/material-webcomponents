export class MWCCardContent {
    render() {
        return (h("section", { class: "mdc-card__supporting-text" },
            h("slot", null)));
    }
}
