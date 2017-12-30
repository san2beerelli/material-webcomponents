export class MWCCardHeader {
    renderTitle() {
        if (this.title) {
            return (h("h1", { class: "mdc-card__title mdc-card__title--large" }, this.title));
        }
        return null;
    }
    renderSubTitle() {
        if (this.subtitle) {
            return (h("h2", { class: "mdc-card__subtitle" }, this.subtitle));
        }
        return null;
    }
    render() {
        return (h("section", { class: "mdc-card__primary" },
            this.renderTitle(),
            this.renderSubTitle(),
            h("slot", null)));
    }
}
