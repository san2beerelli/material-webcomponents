export class MWCContentForToolbar {
    componentWillLoad() {
        this.contentToolbarEl.className = this.getIconClassName();
    }
    getIconClassName() {
        let className = 'mdc-toolbar-fixed-adjust';
        return className;
    }
    render() {
        return (h("slot", null));
    }
}
