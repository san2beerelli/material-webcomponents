export class MWCToolbarTitle {
    componentWillLoad() {
        this.toolbarTitleEl.className = 'mdc-toolbar__title';
    }
    render() {
        return (h("slot", null));
    }
}
