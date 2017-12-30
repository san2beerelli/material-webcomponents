export class MWCGridListTile {
    componentWillLoad() {
        if (this.titlebackgroundcolor) {
            this.gridListTileEl.style.setProperty('--mdc-theme-primary', `${this.titlebackgroundcolor}`);
        }
    }
    componentDidLoad() {
        this.tileTitle.style.setProperty('height', 'auto');
    }
    render() {
        return (h("li", { class: "mdc-grid-tile" },
            h("div", { class: "mdc-grid-tile__primary" },
                h("div", { class: "mdc-grid-tile__primary-content" },
                    h("slot", { name: "tile-content" }))),
            h("span", { class: "mdc-grid-tile__secondary", ref: (tileTitle) => { this.tileTitle = tileTitle; } },
                h("slot", { name: "tile-title" }))));
    }
}
