export class MWCMenuItem {
    constructor() {
        this.disabled = false;
        this.role = "menuitem"; //option
    }
    render() {
        return (h("li", { class: "mdc-list-item", role: this.role, tabindex: this.disabled ? -1 : 0, "aria-disabled": this.disabled },
            h("slot", null)));
    }
}
