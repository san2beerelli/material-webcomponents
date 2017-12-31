import { MDCRipple } from '@material/ripple';
export class MWCListItem {
    constructor() {
        this.ripple = true;
        this.interactive = true;
    }
    componentWillLoad() {
        // if(this.tilewidth){
        // this.gridListEl.style.setProperty('--mdc-grid-list-tile-width', this.tilewidth);
        // }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.listItemRipple = MDCRipple.attachTo(this.listItem);
            //  this.listItemRipple.unbounded = true
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.listItemRipple.destroy();
        }
    }
    getListItemClassName() {
        let className = 'mdc-list-item';
        if (this.interactive) {
            className = ` ${className} mwc-list-item`;
        }
        return className;
    }
    render() {
        return (h("li", { class: this.getListItemClassName(), ref: (listItem) => { this.listItem = listItem; } },
            h("slot", null)));
    }
}
