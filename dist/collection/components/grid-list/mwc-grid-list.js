export class MWCGridList {
    /*
      1x1
      16x9
      2x3
      3x2
      4x3
      3x4
   */
    componentWillLoad() {
        if (this.tilewidth) {
            this.gridListEl.style.setProperty('--mdc-grid-list-tile-width', this.tilewidth);
        }
    }
    getGridListClassName() {
        let className = 'mdc-grid-list';
        if (this.aspectratio) {
            className = ` ${className} mdc-grid-list--tile-aspect-${this.aspectratio}`;
        }
        if (this.tiletitleposition === "top") {
            className = ` ${className} mdc-grid-list--header-caption`;
        }
        return className;
    }
    render() {
        return (h("div", { class: this.getGridListClassName() },
            h("ul", { class: "mdc-grid-list__tiles" },
                h("slot", null))));
    }
}
