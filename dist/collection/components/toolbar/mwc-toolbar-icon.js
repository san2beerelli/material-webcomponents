export class MWCToolbarIcon {
    componentWillLoad() {
        this.toolbarIconEl.className = this.getIconClassName();
    }
    getIconClassName() {
        let className = 'mdc-toolbar__menu-icon material-icons mwc-menu-icon';
        return className;
    }
    render() {
        return (h("slot", null));
    }
}
